import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Asset, Entry, EntryCollection } from "contentful";
import * as marked from "marked";
import { Observable, timer } from "rxjs";
import {
  delayWhen,
  map,
  retry,
  retryWhen,
  shareReplay,
  take,
  tap,
  timeout
} from "rxjs/operators";
import { environment } from "../../environments/environment.prod";
import { SettingsService } from "./settings.service";

import { EventItem } from "../models/event-item.model";
import { InfoItem } from "../models/info-item.model";
import { SimpleContent } from "../models/simple-content.model";
import { Speaker } from "../models/speaker.model";
import { Workshop } from "../models/workshop.model";
import { ErrorService } from "./error.service";

export enum EventContentTypes {
  SPEAKER = "speaker",
  WORKSHOP = "workshop",
  EVENT_ITEM = "eventItem",
  SIMPLE_CONTENT = "simpleContent",
  INFO_ITEM = "infoItem"
}

export enum EventItemType {
  NGPOLAND = "ngPoland",
  JSPOLAND = "jsPoland"
}

@Injectable({
  providedIn: "root"
})
export class ContentfulService {
  timeoutTime = 20000;
  delayWhenTime = 10000;

  private readonly CONTENTFUL_URL = "http://cdn.contentful.com";
  private readonly CONTENTFUL_URL_ENTRIES = `${this.CONTENTFUL_URL}/spaces/${
    environment.contentful.spaceId
  }/environments/master/entries?access_token=${environment.contentful.token}`;

  constructor(private settings: SettingsService, private http: HttpClient, private errorService: ErrorService) {}

  getContentfulUrlEntry(entryId: string): string {
    return `http://cdn.contentful.com/spaces/${
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

  getInfoItems(howMany: number): Observable<Array<InfoItem>> {
    const query = {
      content_type: EventContentTypes.INFO_ITEM,
      locale: this.settings.getLocale(),
      order: "fields.order",
      limit: howMany
    };
    this.errorService.resetCounter();

    return this.http
      .get(
        `${this.CONTENTFUL_URL_ENTRIES}&${this.getContentfulUrlParameters(
          query
        )}`,
        { responseType: "json" }
      )
      .pipe(
        shareReplay(),
        timeout(this.timeoutTime),
        retryWhen((errors: any) => {
          return errors.pipe(
            delayWhen(() => timer(this.delayWhenTime)),
            take(5),
            tap(() => {
              this.errorService.showNoConnectionDlg();
            })
          );
        }),
        map((entries: EntryCollection<InfoItem>) => {
          return entries.items.map((item: Entry<any>) => {
            return new InfoItem(
              item.fields.title,
              item.fields.ordre,
              item.fields.icon,
              item.fields.description,
              item.fields.urlLink
            );
          });
        })
      );
  }

  getEventItems(
    howMany: number,
    type: EventItemType
  ): Observable<Array<EventItem>> {
    const query = {
      content_type: EventContentTypes.EVENT_ITEM,
      locale: this.settings.getLocale(),
      "fields.type": type,
      order: "fields.startDate",
      limit: howMany
    };
    this.errorService.resetCounter();

    return this.http
      .get(
        `${this.CONTENTFUL_URL_ENTRIES}&${this.getContentfulUrlParameters(
          query
        )}`,
        { responseType: "json" }
      )
      .pipe(
        shareReplay(),
        timeout(this.timeoutTime),
        retryWhen((errors: any) => {
          return errors.pipe(
            delayWhen(() => timer(this.delayWhenTime)),
            take(5),
            tap(() => {
              this.errorService.showNoConnectionDlg();
            })
          );
        }),
        map((entries: EntryCollection<EventItem>) => {
          let assets: Array<Asset> = null;
          let links: Array<Entry<any>> = null;

          if (entries.includes) {
            assets = entries.includes.Asset;
            links = entries.includes.Entry;
          }

          return entries.items.map((item: Entry<any>) => {
            let speaker = null;
            if (links && item.fields.presenter) {
              speaker = this.getEntryById(links, item.fields.presenter.sys.id);
            }

            let speakerPhoto = null;
            if (speaker) {
              speakerPhoto = this.getAssetById(
                assets,
                speaker.fields.photo.sys.id
              );
            }

            return new EventItem(
              item.fields.title,
              item.fields.type,
              item.fields.category,
              item.fields.shortDescription,
              item.fields.description,
              item.fields.startDate,
              item.fields.endDate,
              speaker
                ? new Speaker(
                    speaker.fields.name,
                    speaker.fields.role,
                    speaker.fields.bio,
                    speakerPhoto ? speakerPhoto.fields.file.url : undefined,
                    speakerPhoto ? speakerPhoto.fields.title : undefined,
                    speakerPhoto ? speakerPhoto.fields.description : undefined,
                    speaker.fields.email,
                    speaker.fields.urlGithub,
                    speaker.fields.urlLinkedIn,
                    speaker.fields.urlTwitter,
                    speaker.fields.urlWww
                  )
                : undefined
            );
          });
        })
      );
  }

  getSimpleContentById(myId: string): Observable<SimpleContent> {
    const query = {
      content_type: EventContentTypes.SIMPLE_CONTENT,
      locale: this.settings.getLocale(),
      "fields.myId": myId,
      limit: 1
    };
    this.errorService.resetCounter();

    return this.http
      .get(
        `${this.CONTENTFUL_URL_ENTRIES}&${this.getContentfulUrlParameters(
          query
        )}`,
        { responseType: "json" }
      )
      .pipe(
        shareReplay(),
        timeout(this.timeoutTime),
        retryWhen((errors: any) => {
          return errors.pipe(
            delayWhen(() => timer(this.delayWhenTime)),
            take(5),
            tap(() => {
              this.errorService.showNoConnectionDlg();
            })
          );
        }),
        map((entries: EntryCollection<SimpleContent>) => {
          if (entries && entries.items && entries.items[0]) {
            return new SimpleContent(
              entries.items[0].fields.myId,
              entries.items[0].fields.title,
              entries.items[0].fields.text
            );
          } else {
            return new SimpleContent("000", "nie udało się", "nie wyszło coś");
          }
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
    this.errorService.resetCounter();

    return this.http
      .get(
        `${this.CONTENTFUL_URL_ENTRIES}&${this.getContentfulUrlParameters(
          query
        )}`,
        { responseType: "json" }
      )
      .pipe(
        shareReplay(),
        timeout(this.timeoutTime),
        retryWhen((errors: any) => {
          return errors.pipe(
            delayWhen(() => timer(this.delayWhenTime)),
            take(5),
            tap(() => {
              this.errorService.showNoConnectionDlg();
            })
          );
        }),
        map((entries: EntryCollection<any>) => {
          const assets: Array<Asset> = entries.includes.Asset;
          const links: Array<Entry<any>> = entries.includes.Entry;

          return entries.items.map((item: Entry<any>) => {
            //  const profilePhoto: Asset = this.getAssetById(assets, item.fields.photo.sys.id);
            const speaker = this.getEntryById(
              links,
              item.fields.instructor.sys.id
            );
            // console.log("Spekaer: ", speaker);
            const speakerPhoto = this.getAssetById(
              assets,
              speaker.fields.photo.sys.id
            );

            return new Workshop(
              item.fields.title,
              item.fields.description,
              new Speaker(
                speaker.fields.name,
                speaker.fields.role,
                speaker.fields.bio,
                speakerPhoto ? speakerPhoto.fields.file.url : undefined,
                speakerPhoto ? speakerPhoto.fields.title : undefined,
                speakerPhoto ? speakerPhoto.fields.description : undefined,
                speaker.fields.email,
                speaker.fields.urlGithub,
                speaker.fields.urlLinkedIn,
                speaker.fields.urlTwitter,
                speaker.fields.urlWww
              ),
              item.fields.startDate,
              item.fields.endDate,
              0, // TODO: zamienić na współrzędne
              0, // TODO: zamienić na współrzędne
              item.fields.locationDescription,
              item.fields.pricePln
            );
          });
        })
      );
  }

  getSpeakers(howMany: number): Observable<Array<Speaker>> {
    const query = {
      content_type: EventContentTypes.SPEAKER,
      locale: this.settings.getLocale(),
      order: "fields.name",
      limit: howMany
    };
    this.errorService.resetCounter();

    return this.http
      .get(
        `${this.CONTENTFUL_URL_ENTRIES}&${this.getContentfulUrlParameters(
          query
        )}`,
        { responseType: "json" }
      )
      .pipe(
        shareReplay(),
        timeout(this.timeoutTime),
        retryWhen((errors: any) => {
          return errors.pipe(
            delayWhen(() => timer(this.delayWhenTime)),
            take(5),
            tap(() => {
              this.errorService.showNoConnectionDlg();
            })
          );
        }),
        map((entries: EntryCollection<any>) => {
          const assets: Array<Asset> = entries.includes.Asset;

          return entries.items.map((item: Entry<any>) => {
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

  markdownToHtml(md: string) {
    return marked(md);
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

  private getAssetsByIds(assetArray: Array<Asset>, ids: Array<string>): any {
    if (assetArray && assetArray.length > 0 && ids && ids.length > 0) {
      const newArray = assetArray.filter((item: Asset) => {
        return ids.includes(item.sys.id);
      });

      return newArray;
    }

    return {};
  }

  private getEntryById(entriesArray: Array<Entry<any>>, id: string): any {
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
    entriesArray: Array<Entry<any>>,
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
