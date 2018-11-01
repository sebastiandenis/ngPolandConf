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

export enum EventItemIcon {
  PRESENTATION = 0xf51c,
  BREAK = 0xf086,
  EATING = 0xf2e7,
  QA = 0xf059,
  REGISTRATION = 0xf2c2,
  PARTY = 0xf561
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

      return duration / 1000 / 60;
    } else {
      return 0;
    }
  }

  getEventItemIcon(): string {
    switch (this.category.toLowerCase()) {
      case "break":
        return String.fromCharCode(EventItemIcon.BREAK);
      case "eating":
        return String.fromCharCode(EventItemIcon.EATING);
      case "party":
        return String.fromCharCode(EventItemIcon.PARTY);
      case "presentation":
        return String.fromCharCode(EventItemIcon.PRESENTATION);
      case "qa":
        return String.fromCharCode(EventItemIcon.QA);
      case "registration":
        return String.fromCharCode(EventItemIcon.REGISTRATION);
      default:
        return "";
    }
  }
}
