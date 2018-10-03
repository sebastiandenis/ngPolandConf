import { Location } from "./location.model";
import { Speaker } from "./speaker.model";

export interface IWorkshop {
  title: string;
  description?: string;
  instructor?: Speaker;
  startDate?: string;
  endDate?: string;
  location?: Location;
  locationDescription?: string;
  pricePln?: number;
}

export class Workshop implements IWorkshop {
  location: Location;

  constructor(
    public title: string,
    public description: string,
    public instructor: Speaker,
    public startDate: string,
    public endDate: string,
    locationLon: number,
    locationLat: number,
    public locationDescription: string,
    public pricePln: number
  ) {
    this.location = new Location(locationLat, locationLon);
  }
}
