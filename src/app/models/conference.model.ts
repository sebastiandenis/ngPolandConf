import { ITheme } from "./theme.model";

export interface IConference {
    confId: string;
    confName: string;
    confYear: number;
    confTheme: ITheme;
}

export class Conference {
    constructor(confId: string, confName: string, confYear: number, confTheme: ITheme) {}
}
