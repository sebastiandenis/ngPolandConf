import { Injectable } from "@angular/core";
import { ContentfulService, EventItemType } from "./contentful.service";
import { DeviceService } from "./device.service";
import { EventItem, IEventItem } from "../models/event-item.model";
import { AppStateService } from "./app-state.service";
import { Observable, combineLatest } from "rxjs";
import { Workshop, IWorkshop } from "../models/workshop.model";
import { Speaker, ISpeaker } from "../models/speaker.model";
import { InfoItem, IInfoItemModel } from "../models/info-item.model";
import { SimpleContent } from "../models/simple-content.model";
import { Version } from "../models/version.model";
import { AppData } from "../models/app-data.model";
import { SecureStorage } from "nativescript-secure-storage";
import { SECURE_STORAGE_KEY } from "./settings.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class AppStateFacadeService {
    private currentConfId = "2019";
    private secureStorage: SecureStorage;
    constructor(
        private appStateService: AppStateService,
        private contentful: ContentfulService,
        private device: DeviceService,
        private http: HttpClient
    ) {
        this.secureStorage = new SecureStorage();
        this.appStateService.currentConfId$.subscribe((confId: string) => {
            this.currentConfId = confId;
        });
    }

    getEventsNgPoland(): Observable<Array<EventItem>> {
        return this.appStateService.eventsNgPoland$;
    }

    getEventsJsPoland(): Observable<Array<EventItem>> {
        return this.appStateService.eventsJsPoland$;
    }

    getWorkshops(): Observable<Array<Workshop>> {
        return this.appStateService.workshops$;
    }

    getSpeakers(): Observable<Array<Speaker>> {
        return this.appStateService.speakers$;
    }

    getInfo(): Observable<Array<InfoItem>> {
        return this.appStateService.info$;
    }

    getNgGirls(): Observable<SimpleContent> {
        return this.appStateService.ngGirls$;
    }

    getDataVersion(): Observable<Version> {
        return this.appStateService.dataVersion$;
    }

    initState() {
        // TODO: poradzić sobie z asynchronicznością
        this.initFromApp();
        this.initStateFromLocalStorage();
        if (this.device.isInternetConnectionAvailable()) {
            console.log("jest połączenie!!!");
            this.initStateFromTheInternet();
        } else {
            console.log("brak połączenia!!!!");
            this.initStateFromLocalStorage();
        }
    }

    loadEvents(
        type: EventItemType,
        confId: string,
        howMany = 100
    ): Observable<Array<EventItem>> {
        return this.contentful.getEventItems(howMany, type, confId);
    }

    loadSpeakers(confId: string, howMany = 100): Observable<Array<Speaker>> {
        return this.contentful.getSpeakers(howMany, confId);
    }

    loadWorkshops(confId: string, howMany = 100): Observable<Array<Workshop>> {
        return this.contentful.getWorkshops(howMany, confId);
    }

    loadInfo(confId: string, howMany = 100): Observable<Array<InfoItem>> {
        return this.contentful.getInfoItems(howMany, confId);
    }

    loadNgGirls(confId: string): Observable<SimpleContent> {
        return this.contentful.getSimpleContentById(
            "ng-girls-workshops",
            confId
        );
    }

    loadDataVersion(): Observable<Version> {
        return this.contentful.getVersion();
    }

    private initStateFromTheInternet() {
        const obsArray = [
            this.loadDataVersion(),
            this.loadEvents(EventItemType.NGPOLAND, this.currentConfId),
            this.loadEvents(EventItemType.JSPOLAND, this.currentConfId),
            this.loadWorkshops(this.currentConfId),
            this.loadInfo(this.currentConfId),
            this.loadSpeakers(this.currentConfId),
            this.loadNgGirls(this.currentConfId)
        ];
        combineLatest(obsArray).subscribe(
            ([
                version,
                ngPolandEvents,
                jsPolandEvents,
                workshops,
                info,
                speakers,
                ngGirls
            ]: [
                Version,
                Array<EventItem>,
                Array<EventItem>,
                Array<Workshop>,
                Array<InfoItem>,
                Array<Speaker>,
                SimpleContent
            ]) => {
                this.appStateService.updateDataVersion(version);
                this.appStateService.updateEventsNgPoland(ngPolandEvents);
                this.appStateService.updateEventsJsPoland(jsPolandEvents);
                this.appStateService.updateWorkshops(workshops);
                this.appStateService.updateInfo(info);
                this.appStateService.updateSpeakers(speakers);
                this.appStateService.updateNgGirls(ngGirls);
                const appData = new AppData({
                    version,
                    speakers,
                    ngGirls,
                    infoItems: info,
                    workshops,
                    eventsNgPoland: ngPolandEvents,
                    eventsJsPoland: jsPolandEvents
                });
                this.secureStorage
                    .set({
                        key: SECURE_STORAGE_KEY,
                        value: JSON.stringify(appData)
                    })
                    .then((success: boolean) => {
                        console.log("Data successfuly written to secure storage: ", success);
                    });
            }
        );
    }

    private initStateFromLocalStorage() {
        this.secureStorage.get({ key: SECURE_STORAGE_KEY }).then(value => {
            
            this.initFromAppData(JSON.parse(value));
        });
    }

    private initFromApp() {
        this.http
            .get<AppData>("/assets/app-data.json")
            .subscribe((jsonData: AppData) => {
                this.initFromAppData(jsonData);
            });
    }
    private initFromAppData(appData: AppData) {
        const d = new AppData(appData);
        // version
        this.appStateService.updateDataVersion(
            new Version(appData.version.version)
        );

        // info
        const info = appData.infoItems.map((infoItem: IInfoItemModel) => {
            return new InfoItem(
                infoItem.title,
                infoItem.order,
                infoItem.icon,
                infoItem.description,
                infoItem.confId,
                infoItem.urlLink
            );
        });
        this.appStateService.updateInfo(info);

        // ngGirls
        this.appStateService.updateNgGirls(appData.ngGirls);

        // ngPolandEvents
        const ngPolandEvents = appData.eventsNgPoland.map(
            (event: IEventItem) => {
                return new EventItem(
                    event.title,
                    event.confId,
                    event.type,
                    event.category,
                    event.shortDescription,
                    event.description,
                    event.startDate,
                    event.endDate,
                    event.presenter ? 
                    new Speaker(
                        event.presenter.name,
                        event.presenter.confIds,
                        event.presenter.role,
                        event.presenter.bio,
                        event.presenter.photo.imgUrl,
                        event.presenter.photo.imgTitle,
                        event.presenter.photo.imgDesc,
                        event.presenter.email,
                        event.presenter.urlGithub,
                        event.presenter.urlLinkedIn,
                        event.presenter.urlTwitter,
                        event.presenter.urlWww
                    ) : null
                );
            }
        );
        this.appStateService.updateEventsNgPoland(ngPolandEvents);

        // jsPolandEvents
        const jsPolandEvents = appData.eventsJsPoland.map(
            (event: IEventItem) => {
                return new EventItem(
                    event.title,
                    event.confId,
                    event.type,
                    event.category,
                    event.shortDescription,
                    event.description,
                    event.startDate,
                    event.endDate,
                    event.presenter ? 
                    new Speaker(
                        event.presenter.name,
                        event.presenter.confIds,
                        event.presenter.role,
                        event.presenter.bio,
                        event.presenter.photo.imgUrl,
                        event.presenter.photo.imgTitle,
                        event.presenter.photo.imgDesc,
                        event.presenter.email,
                        event.presenter.urlGithub,
                        event.presenter.urlLinkedIn,
                        event.presenter.urlTwitter,
                        event.presenter.urlWww
                    ) : null
                );
            }
        );
        this.appStateService.updateEventsJsPoland(jsPolandEvents);

        // workshops
        const workshops = appData.workshops.map((workshop: IWorkshop) => {
            return new Workshop(
                workshop.title,
                workshop.confId,
                workshop.description,
                new Speaker(
                    workshop.instructor.name,
                    workshop.instructor.confIds,
                    workshop.instructor.role,
                    workshop.instructor.bio,
                    workshop.instructor.photo.imgUrl,
                    workshop.instructor.photo.imgTitle,
                    workshop.instructor.photo.imgDesc,
                    workshop.instructor.email,
                    workshop.instructor.urlGithub,
                    workshop.instructor.urlLinkedIn,
                    workshop.instructor.urlTwitter,
                    workshop.instructor.urlWww
                ),
                workshop.startDate,
                workshop.endDate,
                workshop.location.lon,
                workshop.location.lat,
                workshop.locationDescription,
                workshop.pricePln
            );
        });
        this.appStateService.updateWorkshops(workshops);

        // speakers
        const speakers = appData.speakers.map((s: ISpeaker) => {
            return new Speaker(
                s.name,
                s.confIds,
                s.role,
                s.bio,
                s.photo.imgUrl,
                s.photo.imgTitle,
                s.photo.imgDesc,
                s.email,
                s.urlGithub,
                s.urlLinkedIn,
                s.urlTwitter,
                s.urlWww
            );
        });
        this.appStateService.updateSpeakers(speakers);
    }
}
