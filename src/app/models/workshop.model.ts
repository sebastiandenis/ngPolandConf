import { Location, ILocation } from "./location.model";
import { Speaker, ISpeaker } from "./speaker.model";

export interface IWorkshop {
  title: string;
  confId: string;
  description?: string;
  instructor?: ISpeaker;
  startDate?: string;
  endDate?: string;
  location?: ILocation;
  locationDescription?: string;
  pricePln?: number;

}

export class Workshop implements IWorkshop {
  location: Location;

  constructor(
    public title: string,
    public confId: string,
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
