import { Speaker } from "./speaker.model";

export interface IEventItem {
  title: string;
  type: string;
  category: string;
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
    public category: string,
    public shortDescription: string,
    public description: string,
    public startDate: string,
    public endDate: string,
    public presenter: Speaker
  ) {}

  getEventDuration(): number {
    if (this.startDate && this.endDate) {
      const start: Date = new Date(this.startDate);
      const end: Date = new Date(this.endDate);
      const duration = end.valueOf() - start.valueOf();

      return (duration / 1000) / 60;
    } else {
      return 0;
    }
  }
}
