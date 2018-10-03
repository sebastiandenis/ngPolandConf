import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Asset, EntryCollection, Entry } from "contentful";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment.prod";
import { SettingsService } from "./settings.service";

import { Speaker } from "../models/speaker.model";
import { EventItem } from "../models/event-item.model";
import { Workshop } from "../models/workshop.model";

export enum EventContentTypes {
  SPEAKER = "speaker",
  WORKSHOP = "workshop",
  EVENT_ITEM = "eventItem"
}

export enum EventItemType {
  NGPOLAND = "ngPoland",
  JSPOLAND = "jsPoland"
}

@Injectable({
  providedIn: "root"
})
export class ContentfulService {
  private readonly CONTENTFUL_URL = "https://cdn.contentful.com";
  private readonly CONTENTFUL_URL_ENTRIES = `${this.CONTENTFUL_URL}/spaces/${
    environment.contentful.spaceId
  }/environments/master/entries?access_token=${environment.contentful.token}`;

  constructor(private settings: SettingsService, private http: HttpClient) {}

  getContentfulUrlEntry(entryId: string): string {
    return `https://cdn.contentful.com/spaces/${
      environment.contentful.spaceId
    }/environments/master/entries/${entryId}?access_token=${
      environment.contentful.token
    }`;
  }

  getContentfulUrlParameters(params: {}): string {
    return Object.entries(params)
      .map(([key, val]) => `${key}=${val}`)
      .join("&");
  }

  getEventItems(howMany: number, type: EventItemType): Observable<Array<EventItem>> {
    const query = {
      content_type: EventContentTypes.EVENT_ITEM,
      locale: this.settings.getLocale(),
      'fields.type': type,
      order: "fields.startDate",
      limit: howMany
    };

    return this.http
      .get(
        `${this.CONTENTFUL_URL_ENTRIES}&${this.getContentfulUrlParameters(
          query
        )}`,
        { responseType: "json" }
      )
      .pipe(
        map((entries: EntryCollection<any>) => {
          //const assets: Array<Asset> = entries.includes.Asset;

          return entries.items.map(item => {
            //  const profilePhoto: Asset = this.getAssetById(assets, item.fields.photo.sys.id);

            return new EventItem(
              item.fields.title,
              item.fields.type,
              item.fields.shortDescription,
              item.fields.description,
              item.fields.startDate,
              item.fields.endDate,
              undefined // TODO: zamienić na pobieranie Speakera
            );
          });
        })
      );
  }

  getWorkshops(howMany: number): Observable<Array<Workshop>> {
    const query = {
      content_type: EventContentTypes.WORKSHOP,
      locale: this.settings.getLocale(),
      order: "sys.createdAt",
      limit: howMany
    };

    return this.http
      .get(
        `${this.CONTENTFUL_URL_ENTRIES}&${this.getContentfulUrlParameters(
          query
        )}`,
        { responseType: "json" }
      )
      .pipe(
        map((entries: EntryCollection<any>) => {
          //const assets: Array<Asset> = entries.includes.Asset;

          return entries.items.map(item => {
            //  const profilePhoto: Asset = this.getAssetById(assets, item.fields.photo.sys.id);

            return new Workshop(
              item.fields.title,
              item.fields.description,
              undefined, // TODO: zamienić na pobieranie Speakera
              item.fields.startDate,
              item.fields.endDate,
              0, // TODO: zamienić na współrzędne
              0, // TODO: zamienić na współrzędne
              item.fields.locationDescription,
              item.fields.pricePln,
            );
          });
        })
      );
  }

  getSpeakers(howMany: number): Observable<Array<Speaker>> {
    const query = {
      content_type: EventContentTypes.SPEAKER,
      locale: this.settings.getLocale(),
      order: "sys.createdAt",
      limit: howMany
    };

    return this.http
      .get(
        `${this.CONTENTFUL_URL_ENTRIES}&${this.getContentfulUrlParameters(
          query
        )}`,
        { responseType: "json" }
      )
      .pipe(
        map((entries: EntryCollection<any>) => {
          const assets: Array<Asset> = entries.includes.Asset;

          return entries.items.map(item => {
            const profilePhoto: Asset = this.getAssetById(
              assets,
              item.fields.photo.sys.id
            );

            return new Speaker(
              item.fields.name,
              item.fields.role,
              item.fields.bio,
              profilePhoto ? profilePhoto.fields.file.url : undefined,
              profilePhoto ? profilePhoto.fields.title : undefined,
              profilePhoto ? profilePhoto.fields.description : undefined,
              item.fields.email,
              item.fields.urlGithub,
              item.fields.urlLinkedIn,
              item.fields.urlTwitter,
              item.fields.urlWww
            );
          });
        })
      );
  }

  private getAssetById(assetArray: Array<Asset>, id: string): any {
    if (assetArray && assetArray.length > 0) {
      const newArray = assetArray.filter((item: Asset) => item.sys.id === id);
      if (newArray && newArray.length > 0) {
        return newArray[0];
      }
    }

    return {};
  }

  private getEntryById(entriesArray: Entry<any>[], id: string): any {
    if (entriesArray && entriesArray.length > 0) {
      const newArray = entriesArray.filter(
        (item: Entry<any>) => item.sys.id === id
      );
      if (newArray && newArray.length > 0) {
        return newArray[0];
      }
    }
    return {};
  }

  private getEntriesByContentType(
    entriesArray: Entry<any>[],
    contentType: EventContentTypes
  ): any {
    if (entriesArray && entriesArray.length > 0) {
      const newArray = entriesArray.filter(
        (item: Entry<any>) => item.sys.contentType.sys.id === contentType
      );
      if (newArray && newArray.length > 0) {
        return newArray;
      }
    }
    return {};
  }

}
