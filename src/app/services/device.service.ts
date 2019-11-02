import { Injectable } from "@angular/core";
import {
    connectionType,
    getConnectionType
} from "tns-core-modules/connectivity";

@Injectable({
    providedIn: "root"
})
export class DeviceService {
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
