import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { EventItem } from "../models/event-item.model";
import { InfoItem } from "../models/info-item.model";
import { Speaker } from "../models/speaker.model";
import { Workshop } from "../models/workshop.model";
import { SimpleContent } from "../models/simple-content.model";
import { Version } from "../models/version.model";

@Injectable({
    providedIn: "root"
})
export class AppStateService {
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
