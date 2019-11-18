import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { EventItem, IEventItem } from "../models/event-item.model";
import { InfoItem, IInfoItemModel } from "../models/info-item.model";
import { Speaker, ISpeaker } from "../models/speaker.model";
import { Workshop, IWorkshop } from "../models/workshop.model";
import {
    SimpleContent,
    ISimpleContentModel
} from "../models/simple-content.model";
import { Version, IVersion } from "../models/version.model";
import { AppData } from "../models/app-data.model";
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})
export class AppStateService {
    private _appData: AppData = new AppData();
    private _themeApplied$ = new BehaviorSubject<boolean>(false);
    private _isLoading$ = new BehaviorSubject<boolean>(false);

    private _eventsNgPoland$: BehaviorSubject<
        Array<EventItem>
    > = new BehaviorSubject<Array<EventItem>>([]);
    private _eventsJsPoland$: BehaviorSubject<
        Array<EventItem>
    > = new BehaviorSubject<Array<EventItem>>([]);
    private _info$: BehaviorSubject<Array<InfoItem>> = new BehaviorSubject<
        Array<InfoItem>
    >([]);
    private _speakers$: BehaviorSubject<Array<Speaker>> = new BehaviorSubject<
        Array<Speaker>
    >([]);
    private _workshops$: BehaviorSubject<Array<Workshop>> = new BehaviorSubject<
        Array<Workshop>
    >([]);
    private _ngGirls$: BehaviorSubject<SimpleContent> = new BehaviorSubject<
        SimpleContent
    >(null);
    private _currentConfId$: BehaviorSubject<string> = new BehaviorSubject<
        string
    >("2018");

    private _dataVersionApp$: BehaviorSubject<Version> = new BehaviorSubject<
        Version
    >(new Version("0.0.0"));

    private _dataVersionLocalStorage$: BehaviorSubject<
        Version
    > = new BehaviorSubject<Version>(new Version("0.0.0"));

    private _dataVersionApi$: BehaviorSubject<Version> = new BehaviorSubject<
        Version
    >(new Version("0.0.0"));

    constructor() {
        this.currentConfId$.subscribe((confId: string) => {
            this._appData.currentConfId = confId;
        });
        this.eventsJsPoland$.subscribe((jsEvents: Array<IEventItem>) => {
            this._appData.eventsJsPoland = jsEvents;
        });

        this.eventsNgPoland$.subscribe((ngEvents: Array<IEventItem>) => {
            this._appData.eventsNgPoland = ngEvents;
        });

        this.info$.subscribe((info: Array<IInfoItemModel>) => {
            this._appData.infoItems = info;
        });

        this.ngGirls$.subscribe((ngGirls: ISimpleContentModel) => {
            this._appData.ngGirls = ngGirls;
        });

        this.speakers$.subscribe((speakers: Array<ISpeaker>) => {
            this._appData.speakers = speakers;
        });

        this.themeApplied$.pipe(distinctUntilChanged()).subscribe((themeApplied: boolean) => {
            console.log("[AppState] themeAppliedSubscription: ", themeApplied);
            this._appData.themeApplied = themeApplied;
        });

        this.workshops$.subscribe((workshops: Array<IWorkshop>) => {
            this._appData.workshops = workshops;
        });
    }

    get appData(): AppData {
        return this._appData;
    }

    get isLoading$(): Observable<boolean> {
        return this._isLoading$.asObservable();
    }

    updateIsLoading(state: boolean) {
        this._isLoading$.next(state);
    }

    get themeApplied$(): Observable<boolean> {
        console.log("[AppState] themeApplied: ", this._themeApplied$.getValue());
        return this._themeApplied$.asObservable();
    }

    get themeAppliedSync(): boolean {
        return this._themeApplied$.getValue();
    }

    updateThemeApplied(state: boolean) {
        console.log("[AppStateService] updateThemeApplied(): ", state);
        this._themeApplied$.next(state);
    }

    get eventsNgPoland$(): Observable<Array<EventItem>> {
        return this._eventsNgPoland$.asObservable();
    }

    get eventsJsPoland$(): Observable<Array<EventItem>> {
        return this._eventsJsPoland$.asObservable();
    }

    get info$(): Observable<Array<InfoItem>> {
        return this._info$.asObservable();
    }

    get speakers$(): Observable<Array<Speaker>> {
        return this._speakers$.asObservable();
    }

    get workshops$(): Observable<Array<Workshop>> {
        return this._workshops$.asObservable();
    }

    get ngGirls$(): Observable<SimpleContent> {
        return this._ngGirls$.asObservable();
    }

    get currentConfId$(): Observable<string> {
        return this._currentConfId$.asObservable();
    }

    get dataVersionApp$(): Observable<Version> {
        return this._dataVersionApp$.asObservable();
    }

    get dataVersionLocalStorage$(): Observable<Version> {
        return this._dataVersionLocalStorage$.asObservable();
    }

    get dataVersionApi$(): Observable<Version> {
        return this._dataVersionApi$.asObservable();
    }

    updateDataVersionApp(version: Version) {
        this._dataVersionApp$.next(version);
    }

    updateDataVersionLocalStorage(version: Version) {
        this._dataVersionLocalStorage$.next(version);
    }

    updateDataVersionApi(version: Version) {
        this._dataVersionApi$.next(version);
    }

    updateCurrentConfId(confId: string) {
        this._currentConfId$.next(confId);
    }

    updateNgGirls(content: SimpleContent) {
        this._ngGirls$.next(content);
    }

    updateEventsNgPoland(events: Array<EventItem>) {
        this._eventsNgPoland$.next(events);
    }

    updateEventsJsPoland(events: Array<EventItem>) {
        this._eventsJsPoland$.next(events);
    }

    updateInfo(info: Array<InfoItem>) {
        this._info$.next(info);
    }

    updateSpeakers(speakers: Array<Speaker>) {
        this._speakers$.next(speakers);
    }

    updateWorkshops(workshops: Array<Workshop>) {
        this._workshops$.next(workshops);
    }
}
