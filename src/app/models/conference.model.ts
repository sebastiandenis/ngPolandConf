export interface IConference {
    confId: string;
    confName: string;
}

export class Conference {
    constructor(public confId: string, public confName: string) {}
}
