import { Speaker } from "./speaker.model";

export interface IEventItem {
    title: string;
    type: string;
    shortDescription?: string;
    description?: string;
    startDate?: string;
    endDate?: string;
    presenter?: Speaker;
}

export class EventItem implements IEventItem {
    constructor(
        public title: string,
        public type: string,
        public shortDescription: string,
        public description: string,
        public startDate: string,
        public endDate: string,
        public presenter: Speaker
    ) {}
}
