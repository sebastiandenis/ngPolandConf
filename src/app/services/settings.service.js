"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var Locales;
(function (Locales) {
    Locales["PL"] = "pl";
    Locales["EN"] = "en-US";
})(Locales = exports.Locales || (exports.Locales = {}));
var SettingsService = /** @class */ (function () {
    function SettingsService() {
        this.langs = [
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
        this.langsMap = [
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
        this.lang$ = new rxjs_1.BehaviorSubject(this.langs[1]);
        this.navTabsVisible$ = new rxjs_1.BehaviorSubject(true);
        this.defaultLocale = Locales.EN;
    }
    SettingsService.prototype.getLocale = function () {
        return this.lang$.value.locale;
    };
    SettingsService.prototype.getLangCode = function () {
        return this.lang$.value.code;
    };
    SettingsService.prototype.getLanguages = function () {
        return this.langs.slice();
    };
    SettingsService.prototype.setCurrentLangByLangCode = function (langCode) {
        var l = this.langs.find(function (item) { return item.code === langCode.toLowerCase(); });
        if (l) {
            this.lang$.next(l);
        }
    };
    SettingsService.prototype.setCurrentLangByNavigatorLang = function (langFromNavigator, langsArrayFromNavigator) {
        var _this = this;
        // first try to search using langFromNavigator
        if (langFromNavigator && langFromNavigator.length > 0) {
            var locale = this.searchLangsMap(langFromNavigator);
            if (locale) {
                this.setCurrentLangByLocale(locale);
                return;
            }
        }
        // if not found try with the langs array
        if (langsArrayFromNavigator && langsArrayFromNavigator.length > 0) {
            var itemFound_1 = false;
            langsArrayFromNavigator.forEach(function (item) {
                var locale = _this.searchLangsMap(item);
                if (locale && !itemFound_1) {
                    _this.setCurrentLangByLocale(locale);
                    itemFound_1 = true;
                }
            });
            if (itemFound_1) {
                return;
            }
        }
        // if nothing was found set to default
        this.setCurrentLangByLocale(this.defaultLocale);
    };
    SettingsService.prototype.setCurrentLangByLocale = function (locale) {
        var l = this.langs.find(function (item) { return item.locale === locale; });
        if (l) {
            this.lang$.next(l);
        }
    };
    SettingsService.prototype.getLocaleByLangCode = function (langCode) {
        var l = this.langs.find(function (item) { return item.code === langCode.toLowerCase(); });
        if (l) {
            return l.locale;
        }
        else {
            return this.getLocale();
        }
    };
    SettingsService.prototype.getCurrentLang = function () {
        return this.lang$.asObservable();
    };
    SettingsService.prototype.searchLangsMap = function (l) {
        // returns locale from langsMap
        var mapping = null;
        mapping = this.langsMap.find(function (item) {
            return item.langNavigatorCode.toLowerCase() === l.toLowerCase();
        });
        if (mapping) {
            return mapping.locale;
        }
        else {
            return null;
        }
    };
    SettingsService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], SettingsService);
    return SettingsService;
}());
exports.SettingsService = SettingsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRpbmdzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkJBQW1EO0FBRW5ELElBQVksT0FHWDtBQUhELFdBQVksT0FBTztJQUNqQixvQkFBUyxDQUFBO0lBQ1QsdUJBQVksQ0FBQTtBQUNkLENBQUMsRUFIVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFHbEI7QUFnQkQ7SUFIQTtRQUltQixVQUFLLEdBQWlCO1lBQ3JDO2dCQUNFLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxRQUFRO2dCQUNkLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRTthQUNuQjtZQUNEO2dCQUNFLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxTQUFTO2dCQUNmLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRTthQUNuQjtTQUNGLENBQUM7UUFFZSxhQUFRLEdBQW9CO1lBQzNDO2dCQUNFLGlCQUFpQixFQUFFLElBQUk7Z0JBQ3ZCLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRTthQUNuQjtZQUNEO2dCQUNFLGlCQUFpQixFQUFFLE9BQU87Z0JBQzFCLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRTthQUNuQjtZQUNEO2dCQUNFLGlCQUFpQixFQUFFLElBQUk7Z0JBQ3ZCLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRTthQUNuQjtZQUNEO2dCQUNFLGlCQUFpQixFQUFFLE9BQU87Z0JBQzFCLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRTthQUNuQjtZQUNEO2dCQUNFLGlCQUFpQixFQUFFLE9BQU87Z0JBQzFCLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRTthQUNuQjtTQUNGLENBQUM7UUFFTSxVQUFLLEdBQUcsSUFBSSxzQkFBZSxDQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsRCxvQkFBZSxH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LElBQUssT0FBQSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBcEMsQ0FBb0MsQ0FDdEQsQ0FBQztRQUNGLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBRUQsd0NBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFJTyx3Q0FBYyxHQUF0QixVQUF1QixDQUFTO1FBQzlCLCtCQUErQjtRQUMvQixJQUFJLE9BQU8sR0FBYSxJQUFJLENBQUM7UUFDN0IsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMxQixVQUFDLElBQWM7WUFDYixPQUFBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFO1FBQXhELENBQXdELENBQzNELENBQUM7UUFFRixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ1osTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDeEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBdklVLGVBQWU7UUFIM0IsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxlQUFlLENBd0kzQjtJQUFELHNCQUFDO0NBQUEsQUF4SUQsSUF3SUM7QUF4SVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCBlbnVtIExvY2FsZXMge1xuICBQTCA9IFwicGxcIixcbiAgRU4gPSBcImVuLVVTXCJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTGFuZyB7XG4gIGNvZGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBsb2NhbGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTGFuZ01hcCB7XG4gIGxhbmdOYXZpZ2F0b3JDb2RlOiBzdHJpbmc7XG4gIGxvY2FsZTogTG9jYWxlcztcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1NlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IGxhbmdzOiBBcnJheTxJTGFuZz4gPSBbXG4gICAge1xuICAgICAgY29kZTogXCJwbFwiLFxuICAgICAgbmFtZTogXCJwb2xpc2hcIixcbiAgICAgIGxvY2FsZTogTG9jYWxlcy5QTFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogXCJlblwiLFxuICAgICAgbmFtZTogXCJlbmdsaXNoXCIsXG4gICAgICBsb2NhbGU6IExvY2FsZXMuRU5cbiAgICB9XG4gIF07XG5cbiAgcHJpdmF0ZSByZWFkb25seSBsYW5nc01hcDogQXJyYXk8SUxhbmdNYXA+ID0gW1xuICAgIHtcbiAgICAgIGxhbmdOYXZpZ2F0b3JDb2RlOiBcInBsXCIsXG4gICAgICBsb2NhbGU6IExvY2FsZXMuUExcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhbmdOYXZpZ2F0b3JDb2RlOiBcInBsLXBsXCIsXG4gICAgICBsb2NhbGU6IExvY2FsZXMuUExcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhbmdOYXZpZ2F0b3JDb2RlOiBcImVuXCIsXG4gICAgICBsb2NhbGU6IExvY2FsZXMuRU5cbiAgICB9LFxuICAgIHtcbiAgICAgIGxhbmdOYXZpZ2F0b3JDb2RlOiBcImVuLWdiXCIsXG4gICAgICBsb2NhbGU6IExvY2FsZXMuRU5cbiAgICB9LFxuICAgIHtcbiAgICAgIGxhbmdOYXZpZ2F0b3JDb2RlOiBcImVuLVVTXCIsXG4gICAgICBsb2NhbGU6IExvY2FsZXMuRU5cbiAgICB9XG4gIF07XG5cbiAgcHJpdmF0ZSBsYW5nJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SUxhbmc+KHRoaXMubGFuZ3NbMV0pO1xuXG4gIHByaXZhdGUgbmF2VGFic1Zpc2libGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0cnVlKTtcblxuXG4gIHByaXZhdGUgcmVhZG9ubHkgZGVmYXVsdExvY2FsZSA9IExvY2FsZXMuRU47XG5cbiAgZ2V0TG9jYWxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubGFuZyQudmFsdWUubG9jYWxlO1xuICB9XG5cbiAgZ2V0TGFuZ0NvZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5sYW5nJC52YWx1ZS5jb2RlO1xuICB9XG5cbiAgZ2V0TGFuZ3VhZ2VzKCk6IEFycmF5PElMYW5nPiB7XG4gICAgcmV0dXJuIHRoaXMubGFuZ3Muc2xpY2UoKTtcbiAgfVxuXG4gIHNldEN1cnJlbnRMYW5nQnlMYW5nQ29kZShsYW5nQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgbDogSUxhbmcgPSB0aGlzLmxhbmdzLmZpbmQoXG4gICAgICAoaXRlbTogSUxhbmcpID0+IGl0ZW0uY29kZSA9PT0gbGFuZ0NvZGUudG9Mb3dlckNhc2UoKVxuICAgICk7XG4gICAgaWYgKGwpIHtcbiAgICAgIHRoaXMubGFuZyQubmV4dChsKTtcbiAgICB9XG4gIH1cblxuICBzZXRDdXJyZW50TGFuZ0J5TmF2aWdhdG9yTGFuZyhcbiAgICBsYW5nRnJvbU5hdmlnYXRvcjogc3RyaW5nLFxuICAgIGxhbmdzQXJyYXlGcm9tTmF2aWdhdG9yOiBBcnJheTxzdHJpbmc+XG4gICk6IHZvaWQge1xuICAgIC8vIGZpcnN0IHRyeSB0byBzZWFyY2ggdXNpbmcgbGFuZ0Zyb21OYXZpZ2F0b3JcbiAgICBpZiAobGFuZ0Zyb21OYXZpZ2F0b3IgJiYgbGFuZ0Zyb21OYXZpZ2F0b3IubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbG9jYWxlID0gdGhpcy5zZWFyY2hMYW5nc01hcChsYW5nRnJvbU5hdmlnYXRvcik7XG4gICAgICBpZiAobG9jYWxlKSB7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVudExhbmdCeUxvY2FsZShsb2NhbGUpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiBub3QgZm91bmQgdHJ5IHdpdGggdGhlIGxhbmdzIGFycmF5XG4gICAgaWYgKGxhbmdzQXJyYXlGcm9tTmF2aWdhdG9yICYmIGxhbmdzQXJyYXlGcm9tTmF2aWdhdG9yLmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCBpdGVtRm91bmQgPSBmYWxzZTtcbiAgICAgIGxhbmdzQXJyYXlGcm9tTmF2aWdhdG9yLmZvckVhY2goKGl0ZW06IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBsb2NhbGUgPSB0aGlzLnNlYXJjaExhbmdzTWFwKGl0ZW0pO1xuICAgICAgICBpZiAobG9jYWxlICYmICFpdGVtRm91bmQpIHtcbiAgICAgICAgICB0aGlzLnNldEN1cnJlbnRMYW5nQnlMb2NhbGUobG9jYWxlKTtcbiAgICAgICAgICBpdGVtRm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChpdGVtRm91bmQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIG5vdGhpbmcgd2FzIGZvdW5kIHNldCB0byBkZWZhdWx0XG4gICAgdGhpcy5zZXRDdXJyZW50TGFuZ0J5TG9jYWxlKHRoaXMuZGVmYXVsdExvY2FsZSk7XG4gIH1cblxuICBzZXRDdXJyZW50TGFuZ0J5TG9jYWxlKGxvY2FsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgbDogSUxhbmcgPSB0aGlzLmxhbmdzLmZpbmQoKGl0ZW06IElMYW5nKSA9PiBpdGVtLmxvY2FsZSA9PT0gbG9jYWxlKTtcbiAgICBpZiAobCkge1xuICAgICAgdGhpcy5sYW5nJC5uZXh0KGwpO1xuICAgIH1cbiAgfVxuXG4gIGdldExvY2FsZUJ5TGFuZ0NvZGUobGFuZ0NvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbDogSUxhbmcgPSB0aGlzLmxhbmdzLmZpbmQoXG4gICAgICAoaXRlbTogSUxhbmcpID0+IGl0ZW0uY29kZSA9PT0gbGFuZ0NvZGUudG9Mb3dlckNhc2UoKVxuICAgICk7XG4gICAgaWYgKGwpIHtcbiAgICAgIHJldHVybiBsLmxvY2FsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0TG9jYWxlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudExhbmcoKTogT2JzZXJ2YWJsZTxJTGFuZz4ge1xuICAgIHJldHVybiB0aGlzLmxhbmckLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cblxuXG4gIHByaXZhdGUgc2VhcmNoTGFuZ3NNYXAobDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAvLyByZXR1cm5zIGxvY2FsZSBmcm9tIGxhbmdzTWFwXG4gICAgbGV0IG1hcHBpbmc6IElMYW5nTWFwID0gbnVsbDtcbiAgICBtYXBwaW5nID0gdGhpcy5sYW5nc01hcC5maW5kKFxuICAgICAgKGl0ZW06IElMYW5nTWFwKSA9PlxuICAgICAgICBpdGVtLmxhbmdOYXZpZ2F0b3JDb2RlLnRvTG93ZXJDYXNlKCkgPT09IGwudG9Mb3dlckNhc2UoKVxuICAgICk7XG5cbiAgICBpZiAobWFwcGluZykge1xuICAgICAgcmV0dXJuIG1hcHBpbmcubG9jYWxlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==