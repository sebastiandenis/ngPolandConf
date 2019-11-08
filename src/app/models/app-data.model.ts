import { IInfoItemModel } from "./info-item.model";
import { ISimpleContentModel } from "./simple-content.model";
import { ISpeaker } from "./speaker.model";
import { IWorkshop } from "./workshop.model";
import { IEventItem } from "./event-item.model";
import { IVersion } from "./version.model";

export interface IAppData {
    version: IVersion;
    infoItems: Array<IInfoItemModel>;
    ngGirls: ISimpleContentModel;
    speakers?: Array<ISpeaker>;
    workshops?: Array<IWorkshop>;
    eventsNgPoland?: Array<IEventItem>;
    eventsJsPoland?: Array<IEventItem>;
}

export class AppData implements IAppData {
    version: IVersion;
    infoItems: Array<IInfoItemModel>;
    ngGirls: ISimpleContentModel;
    speakers: Array<ISpeaker>;
    workshops: Array<IWorkshop>;
    eventsNgPoland: Array<IEventItem>;
    eventsJsPoland: Array<IEventItem>;

    constructor(appData: IAppData) {
        this.version = appData.version;
        this.infoItems = appData.infoItems;
        this.ngGirls = appData.ngGirls;
        this.speakers = appData.speakers;
        this.workshops = appData.workshops;
        this.eventsNgPoland = appData.eventsNgPoland;
        this.eventsJsPoland = appData.eventsJsPoland;
    }
}
