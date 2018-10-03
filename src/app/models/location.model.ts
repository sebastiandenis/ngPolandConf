export interface ILocation {
  lat: number;
  lon: number;
}

export class Location implements ILocation {
  constructor(public lat: number, public lon: number) {}
}
