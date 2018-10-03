import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

export enum Locales {
  PL = "pl",
  EN = "en-US"
}

export interface ILang {
  code: string;
  name: string;
  locale: string;
}

export interface ILangMap {
  langNavigatorCode: string;
  locale: Locales;
}

@Injectable({
  providedIn: "root"
})
export class SettingsService {
  private readonly langs: Array<ILang> = [
    {
      code: "pl",
      name: "polish",
      locale: Locales.PL
    },
    {
      code: "en",
      name: "english",
      locale: Locales.EN
    }
  ];

  private readonly langsMap: Array<ILangMap> = [
    {
      langNavigatorCode: "pl",
      locale: Locales.PL
    },
    {
      langNavigatorCode: "pl-pl",
      locale: Locales.PL
    },
    {
      langNavigatorCode: "en",
      locale: Locales.EN
    },
    {
      langNavigatorCode: "en-gb",
      locale: Locales.EN
    },
    {
      langNavigatorCode: "en-US",
      locale: Locales.EN
    }
  ];

  private lang$ = new BehaviorSubject<ILang>(this.langs[1]);

  private navTabsVisible$ = new BehaviorSubject<boolean>(true);


  private readonly defaultLocale = Locales.EN;

  getLocale(): string {
    return this.lang$.value.locale;
  }

  getLangCode(): string {
    return this.lang$.value.code;
  }

  getLanguages(): Array<ILang> {
    return this.langs.slice();
  }

  setCurrentLangByLangCode(langCode: string): void {
    const l: ILang = this.langs.find(
      (item: ILang) => item.code === langCode.toLowerCase()
    );
    if (l) {
      this.lang$.next(l);
    }
  }

  setCurrentLangByNavigatorLang(
    langFromNavigator: string,
    langsArrayFromNavigator: Array<string>
  ): void {
    // first try to search using langFromNavigator
    if (langFromNavigator && langFromNavigator.length > 0) {
      const locale = this.searchLangsMap(langFromNavigator);
      if (locale) {
        this.setCurrentLangByLocale(locale);

        return;
      }
    }

    // if not found try with the langs array
    if (langsArrayFromNavigator && langsArrayFromNavigator.length > 0) {
      let itemFound = false;
      langsArrayFromNavigator.forEach((item: string) => {
        const locale = this.searchLangsMap(item);
        if (locale && !itemFound) {
          this.setCurrentLangByLocale(locale);
          itemFound = true;
        }
      });
      if (itemFound) {
        return;
      }
    }

    // if nothing was found set to default
    this.setCurrentLangByLocale(this.defaultLocale);
  }

  setCurrentLangByLocale(locale: string): void {
    const l: ILang = this.langs.find((item: ILang) => item.locale === locale);
    if (l) {
      this.lang$.next(l);
    }
  }

  getLocaleByLangCode(langCode: string): string {
    const l: ILang = this.langs.find(
      (item: ILang) => item.code === langCode.toLowerCase()
    );
    if (l) {
      return l.locale;
    } else {
      return this.getLocale();
    }
  }

  getCurrentLang(): Observable<ILang> {
    return this.lang$.asObservable();
  }



  private searchLangsMap(l: string): string {
    // returns locale from langsMap
    let mapping: ILangMap = null;
    mapping = this.langsMap.find(
      (item: ILangMap) =>
        item.langNavigatorCode.toLowerCase() === l.toLowerCase()
    );

    if (mapping) {
      return mapping.locale;
    } else {
      return null;
    }
  }
}
