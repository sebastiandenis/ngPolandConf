export interface IInfoItemModel {
  title: string;
  order: string;
  icon: string;
  description: string;
  confId: string;
  urlLink?: string;

  resolveIcon(icon: string): string;
}

export enum InfoItemIcon {
  WORKSHOPS = 0xf5fc,
  FOOD = 0xf2e7,
  TICKETS = 0xf3ff,
  CONTACT = 0xf075,
  LOCATION = 0xf3c5
}

export class InfoItem implements IInfoItemModel {
  // icon: string;
  constructor(
    public title: string,
    public order: string,
    // iconName: string,
    public icon: string,
    public description: string,
    public confId: string,
    public urlLink?: string
  ) {
    // this.icon = this.resolveIcon(iconName);
  }

  resolveIcon(icon: string): string {
    switch (icon.toLowerCase()) {
      case "workshops":
        return String.fromCharCode(InfoItemIcon.WORKSHOPS);
      case "food":
        return String.fromCharCode(InfoItemIcon.FOOD);
      case "tickets":
        return String.fromCharCode(InfoItemIcon.TICKETS);
      case "contact":
        return String.fromCharCode(InfoItemIcon.CONTACT);
        case "location":
        return String.fromCharCode(InfoItemIcon.LOCATION);
      default:
        return "";
    }
  }
}
