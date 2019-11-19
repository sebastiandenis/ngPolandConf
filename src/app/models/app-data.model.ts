import { IInfoItemModel, InfoItem } from "./info-item.model";
import { ISimpleContentModel, SimpleContent } from "./simple-content.model";
import { ISpeaker } from "./speaker.model";
import { IWorkshop } from "./workshop.model";
import { IEventItem } from "./event-item.model";
import { IVersion, Version } from "./version.model";

export interface IAppData {
    version: IVersion;
    themeApplied: boolean;
    currentConfId: string;
    infoItems: Array<IInfoItemModel>;
    ngGirls: ISimpleContentModel;
    speakers?: Array<ISpeaker>;
    workshops?: Array<IWorkshop>;
    eventsNgPoland?: Array<IEventItem>;
    eventsJsPoland?: Array<IEventItem>;
}

export class AppData implements IAppData {
    version: IVersion;
    themeApplied: boolean;
    currentConfId: string;
    infoItems: Array<IInfoItemModel>;
    ngGirls: ISimpleContentModel;
    speakers: Array<ISpeaker>;
    workshops: Array<IWorkshop>;
    eventsNgPoland: Array<IEventItem>;
    eventsJsPoland: Array<IEventItem>;

    constructor(appData?: IAppData) {
        this.version = appData ? appData.version : new Version("0.0.0");
        this.themeApplied = appData ? appData.themeApplied : false;
        this.currentConfId = appData ? appData.currentConfId : null;
        this.infoItems = appData ? appData.infoItems : [];
        this.ngGirls = appData ? appData.ngGirls : null;
        this.speakers = appData ? appData.speakers : [];
        this.workshops = appData ? appData.workshops : [];
        this.eventsNgPoland = appData ? appData.eventsNgPoland : [];
        this.eventsJsPoland = appData ? appData.eventsJsPoland : [];
    }
}
