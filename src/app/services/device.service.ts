import { Injectable } from "@angular/core";
import {
    connectionType,
    getConnectionType,
    startMonitoring,
    stopMonitoring
} from "tns-core-modules/connectivity";
import { BehaviorSubject, Observable } from "rxjs";
import * as app from "tns-core-modules/application";

@Injectable({
    providedIn: "root"
})
export class DeviceService {
    private _hasConnection$ = new BehaviorSubject<boolean>(false);
    private _isLandscape$ = new BehaviorSubject<boolean>(false);

    constructor() {
        startMonitoring((con: number) => {
            this.updateHasConnection(this.isInternetConnectionAvailable());
        });
        app.on(app.orientationChangedEvent, (event: app.OrientationChangedEventData) => {
            if (event.newValue === "landscape") {
                this.updateIsLandscape(true);
            } else {
                this.updateIsLandscape(false);
            }
        });
    }

    get isLandscape$(): Observable<boolean> {
        return this._isLandscape$.asObservable();
    }

    get hasConnection$(): Observable<boolean> {
        return this._hasConnection$.asObservable();
    }

    updateIsLandscape(state: boolean) {
        this._isLandscape$.next(state);
    }

    updateHasConnection(state: boolean) {
        this._hasConnection$.next(state);
    }

    isInternetConnectionAvailable(): boolean {
        const appConnectionType = getConnectionType();

        if (
            appConnectionType === connectionType.ethernet ||
            appConnectionType === connectionType.mobile ||
            appConnectionType === connectionType.wifi
        ) {
            return true;
        } else {
            return false;
        }
    }
}
