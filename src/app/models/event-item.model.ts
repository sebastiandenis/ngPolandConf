import { Speaker, ISpeaker } from "./speaker.model";

export interface IEventItem {
  title: string;
  confId: string;
  type: string;
  category: string;
  shortDescription?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  presenter?: ISpeaker;
}

export enum EventItemIcon {
  PRESENTATION = 0xf3c9,
  BREAK = 0xf086,
  EATING = 0xf2e7,
  QA = 0xf059,
  REGISTRATION = 0xf2c2,
  PARTY = 0xf561,
  WELCOME = 0xf1ae,
  AWARD = 0xf091,
  MOVIE = 0xf008,
  FINAL = 0xf52b
}

export class EventItem implements IEventItem {
  constructor(
    public title: string,
    public confId: string,
    public type: string,
    public category: string,
    public shortDescription: string,
    public description: string,
    public startDate: string,
    public endDate: string,
    public presenter: ISpeaker
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
        case "welcome":
        return String.fromCharCode(EventItemIcon.WELCOME);
        case "award":
        return String.fromCharCode(EventItemIcon.AWARD);
        case "movie":
        return String.fromCharCode(EventItemIcon.MOVIE);
        case "final":
        return String.fromCharCode(EventItemIcon.FINAL);
      default:
        return "";
    }
  }
}
