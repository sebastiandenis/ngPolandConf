import { Injectable } from "@angular/core";
import { ContentfulService, EventItemType } from "./contentful.service";
import { DeviceService } from "./device.service";
import { EventItem, IEventItem } from "../models/event-item.model";
import { AppStateService } from "./app-state.service";
import {
    Observable,
    combineLatest,
    from,
    of,
    BehaviorSubject,
    throwError,
    pipe
} from "rxjs";
import { Workshop, IWorkshop } from "../models/workshop.model";
import { Speaker, ISpeaker } from "../models/speaker.model";
import { InfoItem, IInfoItemModel } from "../models/info-item.model";
import { SimpleContent } from "../models/simple-content.model";
import { Version } from "../models/version.model";
import { AppData } from "../models/app-data.model";
import { SecureStorage } from "nativescript-secure-storage";
import { SECURE_STORAGE_KEY, SettingsService } from "./settings.service";
import { HttpClient } from "@angular/common/http";
import {
    switchMap,
    distinctUntilChanged,
    map,
    catchError,
    take
} from "rxjs/operators";
import { IConference } from "../models/conference.model";

export const DATA_FILE_PATH = "/assets/app-data.json";

@Injectable({
    providedIn: "root"
})
export class AppStateFacadeService {
    private currentConfId: string;
    private secureStorage: SecureStorage;

    constructor(
        private appStateService: AppStateService,
        private contentful: ContentfulService,
        private settings: SettingsService,
        private device: DeviceService,
        private http: HttpClient
    ) {
        this.secureStorage = new SecureStorage();
        this.appStateService.currentConfId$
            .pipe(distinctUntilChanged())
            .subscribe((confId: string) => {
                this.currentConfId = confId;
                this.initState(this.currentConfId);
                // this.initStateFromTheInternet();
            });
    }

    getThemeApplied(): Observable<boolean> {
        return this.appStateService.themeApplied$;
    }

    getThemeAppliedSync(): boolean {
        return this.appStateService.themeAppliedSync;
    }

    getCurrentConference(): Observable<IConference> {
        return this.getConfId().pipe(
            map((confId: string) => {
                return this.settings.getConferenceByConfId(confId);
            })
        );
    }

    updateThemeApplied(state: boolean) {
        this.appStateService.updateThemeApplied(state);
    }

    getConfId(): Observable<string> {
        return this.appStateService.currentConfId$;
    }
    updateConfId(confId: string) {
        this.appStateService.updateCurrentConfId(confId);
    }

    getIsLoading(): Observable<boolean> {
        return this.appStateService.isLoading$;
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

    getDataVersionApp(): Observable<Version> {
        return this.appStateService.dataVersionApp$;
    }

    getDataVersionLocalStorage(): Observable<Version> {
        return this.appStateService.dataVersionLocalStorage$;
    }

    getDataVersionApi(): Observable<Version> {
        return this.appStateService.dataVersionApi$;
    }

    initState(confId?: string) {
        // TODO: poradzić sobie z asynchronicznością
        // this.initFromApp();
        this.initStateFromLocalStorage();
        if (this.device.isInternetConnectionAvailable()) {
            this.initStateFromTheInternet();
        } else {
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

    saveAppState(appData?: AppData): Observable<boolean> {
        this.secureStorage
            .set({
                key: SECURE_STORAGE_KEY,
                value: JSON.stringify(
                    appData ? appData : this.appStateService.appData
                )
            })
            .then((success: boolean) => {
                console.log(
                    "Data successfuly written to secure storage: ",
                    success
                );

                return of(true);
            });

        return of(false);
    }

    private initStateFromTheInternet() {
        this.appStateService.updateIsLoading(true);
        const obsArray = [
            this.loadDataVersion(),
            this.loadEvents(EventItemType.NGPOLAND, this.currentConfId),
            this.loadEvents(EventItemType.JSPOLAND, this.currentConfId),
            this.loadWorkshops(this.currentConfId),
            this.loadInfo(this.currentConfId),
            this.loadSpeakers(this.currentConfId),
            this.loadNgGirls(this.currentConfId)
        ];
        combineLatest(obsArray).pipe(take(1)).subscribe(
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
                this.appStateService.updateDataVersionApi(version);
                this.appStateService.updateEventsNgPoland(ngPolandEvents);
                this.appStateService.updateEventsJsPoland(jsPolandEvents);
                this.appStateService.updateWorkshops(workshops);
                this.appStateService.updateInfo(info);
                this.appStateService.updateSpeakers(speakers);
                this.appStateService.updateNgGirls(ngGirls);
                const appData = new AppData({
                    version,
                    themeApplied: this.getThemeAppliedSync(),
                    currentConfId: this.currentConfId,
                    speakers,
                    ngGirls,
                    infoItems: info,
                    workshops,
                    eventsNgPoland: ngPolandEvents,
                    eventsJsPoland: jsPolandEvents
                });
                this.appStateService.updateIsLoading(false);
                this.saveAppState(appData);
            }
        );
    }

    private getAppDataFromLocalStorage(): Observable<AppData> {
        return from(this.secureStorage.get({ key: SECURE_STORAGE_KEY })).pipe(
            switchMap((value: string) => {
                return of(new AppData(JSON.parse(value)));
            })
        );
    }

    private initStateFromLocalStorage() {
        this.getAppDataFromLocalStorage().pipe(take(1)).subscribe(
            (data: AppData) => {
                this.initFromAppData(data, "local-storage");
            }
        );
    }

    private getAppDataFromFile(): Observable<AppData> {
        return this.http.get<AppData>(DATA_FILE_PATH);
    }

    private initFromApp() {
        this.getAppDataFromFile().pipe(take(1)).subscribe((jsonData: AppData) => {
            this.initFromAppData(jsonData, "app");
        });
    }
    private initFromAppData(
        appData: AppData,
        dataPlace: "app" | "local-storage"
    ) {
        // version
        if (dataPlace === "app") {
            this.appStateService.updateDataVersionApp(
                new Version(appData.version.version)
            );
        } else {
            this.appStateService.updateDataVersionLocalStorage(
                new Version(appData.version.version)
            );
        }

        // themeApplied
        const themeApplied = appData.themeApplied;
        this.appStateService.updateThemeApplied(themeApplied);

        // currentConfId
        const currentConfId = appData.currentConfId;
        this.appStateService.updateCurrentConfId(currentConfId);

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
                    event.presenter
                        ? new Speaker(
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
                          )
                        : null
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
                    event.presenter
                        ? new Speaker(
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
                          )
                        : null
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
                workshop.instructor
                    ? new Speaker(
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
                      )
                    : null,
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
