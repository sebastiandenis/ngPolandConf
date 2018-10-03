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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRpbmdzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkJBQW1EO0FBRW5ELElBQVksT0FHWDtBQUhELFdBQVksT0FBTztJQUNqQixvQkFBUyxDQUFBO0lBQ1QsdUJBQVksQ0FBQTtBQUNkLENBQUMsRUFIVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFHbEI7QUFnQkQ7SUFIQTtRQUltQixVQUFLLEdBQWlCO1lBQ3JDO2dCQUNFLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxRQUFRO2dCQUNkLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRTthQUNuQjtZQUNEO2dCQUNFLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxTQUFTO2dCQUNmLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRTthQUNuQjtTQUNGLENBQUM7UUFFZSxhQUFRLEdBQW9CO1lBQzNDO2dCQUNFLGlCQUFpQixFQUFFLElBQUk7Z0JBQ3ZCLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRTthQUNuQjtZQUNEO2dCQUNFLGlCQUFpQixFQUFFLE9BQU87Z0JBQzFCLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRTthQUNuQjtZQUNEO2dCQUNFLGlCQUFpQixFQUFFLElBQUk7Z0JBQ3ZCLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRTthQUNuQjtZQUNEO2dCQUNFLGlCQUFpQixFQUFFLE9BQU87Z0JBQzFCLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRTthQUNuQjtZQUNEO2dCQUNFLGlCQUFpQixFQUFFLE9BQU87Z0JBQzFCLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRTthQUNuQjtTQUNGLENBQUM7UUFFTSxVQUFLLEdBQUcsSUFBSSxzQkFBZSxDQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsRCxvQkFBZSxH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LElBQUssT0FBQSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBcEMsQ0FBb0MsQ0FDdEQsQ0FBQztRQUNGLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBRUQsd0NBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFJTyx3Q0FBYyxHQUF0QixVQUF1QixDQUFTO1FBQzlCLCtCQUErQjtRQUMvQixJQUFJLE9BQU8sR0FBYSxJQUFJLENBQUM7UUFDN0IsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMxQixVQUFDLElBQWM7WUFDYixPQUFBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFO1FBQXhELENBQXdELENBQzNELENBQUM7UUFFRixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ1osTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDeEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBdklVLGVBQWU7UUFIM0IsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxlQUFlLENBd0kzQjtJQUFELHNCQUFDO0NBQUEsQUF4SUQsSUF3SUM7QUF4SVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIExvY2FsZXMge1xyXG4gIFBMID0gXCJwbFwiLFxyXG4gIEVOID0gXCJlbi1VU1wiXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxhbmcge1xyXG4gIGNvZGU6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbG9jYWxlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxhbmdNYXAge1xyXG4gIGxhbmdOYXZpZ2F0b3JDb2RlOiBzdHJpbmc7XHJcbiAgbG9jYWxlOiBMb2NhbGVzO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBsYW5nczogQXJyYXk8SUxhbmc+ID0gW1xyXG4gICAge1xyXG4gICAgICBjb2RlOiBcInBsXCIsXHJcbiAgICAgIG5hbWU6IFwicG9saXNoXCIsXHJcbiAgICAgIGxvY2FsZTogTG9jYWxlcy5QTFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogXCJlblwiLFxyXG4gICAgICBuYW1lOiBcImVuZ2xpc2hcIixcclxuICAgICAgbG9jYWxlOiBMb2NhbGVzLkVOXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBsYW5nc01hcDogQXJyYXk8SUxhbmdNYXA+ID0gW1xyXG4gICAge1xyXG4gICAgICBsYW5nTmF2aWdhdG9yQ29kZTogXCJwbFwiLFxyXG4gICAgICBsb2NhbGU6IExvY2FsZXMuUExcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhbmdOYXZpZ2F0b3JDb2RlOiBcInBsLXBsXCIsXHJcbiAgICAgIGxvY2FsZTogTG9jYWxlcy5QTFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFuZ05hdmlnYXRvckNvZGU6IFwiZW5cIixcclxuICAgICAgbG9jYWxlOiBMb2NhbGVzLkVOXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYW5nTmF2aWdhdG9yQ29kZTogXCJlbi1nYlwiLFxyXG4gICAgICBsb2NhbGU6IExvY2FsZXMuRU5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhbmdOYXZpZ2F0b3JDb2RlOiBcImVuLVVTXCIsXHJcbiAgICAgIGxvY2FsZTogTG9jYWxlcy5FTlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHByaXZhdGUgbGFuZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElMYW5nPih0aGlzLmxhbmdzWzFdKTtcclxuXHJcbiAgcHJpdmF0ZSBuYXZUYWJzVmlzaWJsZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRydWUpO1xyXG5cclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBkZWZhdWx0TG9jYWxlID0gTG9jYWxlcy5FTjtcclxuXHJcbiAgZ2V0TG9jYWxlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5sYW5nJC52YWx1ZS5sb2NhbGU7XHJcbiAgfVxyXG5cclxuICBnZXRMYW5nQ29kZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubGFuZyQudmFsdWUuY29kZTtcclxuICB9XHJcblxyXG4gIGdldExhbmd1YWdlcygpOiBBcnJheTxJTGFuZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMubGFuZ3Muc2xpY2UoKTtcclxuICB9XHJcblxyXG4gIHNldEN1cnJlbnRMYW5nQnlMYW5nQ29kZShsYW5nQ29kZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBsOiBJTGFuZyA9IHRoaXMubGFuZ3MuZmluZChcclxuICAgICAgKGl0ZW06IElMYW5nKSA9PiBpdGVtLmNvZGUgPT09IGxhbmdDb2RlLnRvTG93ZXJDYXNlKClcclxuICAgICk7XHJcbiAgICBpZiAobCkge1xyXG4gICAgICB0aGlzLmxhbmckLm5leHQobCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDdXJyZW50TGFuZ0J5TmF2aWdhdG9yTGFuZyhcclxuICAgIGxhbmdGcm9tTmF2aWdhdG9yOiBzdHJpbmcsXHJcbiAgICBsYW5nc0FycmF5RnJvbU5hdmlnYXRvcjogQXJyYXk8c3RyaW5nPlxyXG4gICk6IHZvaWQge1xyXG4gICAgLy8gZmlyc3QgdHJ5IHRvIHNlYXJjaCB1c2luZyBsYW5nRnJvbU5hdmlnYXRvclxyXG4gICAgaWYgKGxhbmdGcm9tTmF2aWdhdG9yICYmIGxhbmdGcm9tTmF2aWdhdG9yLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgbG9jYWxlID0gdGhpcy5zZWFyY2hMYW5nc01hcChsYW5nRnJvbU5hdmlnYXRvcik7XHJcbiAgICAgIGlmIChsb2NhbGUpIHtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnRMYW5nQnlMb2NhbGUobG9jYWxlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgbm90IGZvdW5kIHRyeSB3aXRoIHRoZSBsYW5ncyBhcnJheVxyXG4gICAgaWYgKGxhbmdzQXJyYXlGcm9tTmF2aWdhdG9yICYmIGxhbmdzQXJyYXlGcm9tTmF2aWdhdG9yLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGl0ZW1Gb3VuZCA9IGZhbHNlO1xyXG4gICAgICBsYW5nc0FycmF5RnJvbU5hdmlnYXRvci5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBsb2NhbGUgPSB0aGlzLnNlYXJjaExhbmdzTWFwKGl0ZW0pO1xyXG4gICAgICAgIGlmIChsb2NhbGUgJiYgIWl0ZW1Gb3VuZCkge1xyXG4gICAgICAgICAgdGhpcy5zZXRDdXJyZW50TGFuZ0J5TG9jYWxlKGxvY2FsZSk7XHJcbiAgICAgICAgICBpdGVtRm91bmQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChpdGVtRm91bmQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiBub3RoaW5nIHdhcyBmb3VuZCBzZXQgdG8gZGVmYXVsdFxyXG4gICAgdGhpcy5zZXRDdXJyZW50TGFuZ0J5TG9jYWxlKHRoaXMuZGVmYXVsdExvY2FsZSk7XHJcbiAgfVxyXG5cclxuICBzZXRDdXJyZW50TGFuZ0J5TG9jYWxlKGxvY2FsZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBsOiBJTGFuZyA9IHRoaXMubGFuZ3MuZmluZCgoaXRlbTogSUxhbmcpID0+IGl0ZW0ubG9jYWxlID09PSBsb2NhbGUpO1xyXG4gICAgaWYgKGwpIHtcclxuICAgICAgdGhpcy5sYW5nJC5uZXh0KGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TG9jYWxlQnlMYW5nQ29kZShsYW5nQ29kZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGw6IElMYW5nID0gdGhpcy5sYW5ncy5maW5kKFxyXG4gICAgICAoaXRlbTogSUxhbmcpID0+IGl0ZW0uY29kZSA9PT0gbGFuZ0NvZGUudG9Mb3dlckNhc2UoKVxyXG4gICAgKTtcclxuICAgIGlmIChsKSB7XHJcbiAgICAgIHJldHVybiBsLmxvY2FsZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldExvY2FsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudExhbmcoKTogT2JzZXJ2YWJsZTxJTGFuZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMubGFuZyQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHByaXZhdGUgc2VhcmNoTGFuZ3NNYXAobDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIHJldHVybnMgbG9jYWxlIGZyb20gbGFuZ3NNYXBcclxuICAgIGxldCBtYXBwaW5nOiBJTGFuZ01hcCA9IG51bGw7XHJcbiAgICBtYXBwaW5nID0gdGhpcy5sYW5nc01hcC5maW5kKFxyXG4gICAgICAoaXRlbTogSUxhbmdNYXApID0+XHJcbiAgICAgICAgaXRlbS5sYW5nTmF2aWdhdG9yQ29kZS50b0xvd2VyQ2FzZSgpID09PSBsLnRvTG93ZXJDYXNlKClcclxuICAgICk7XHJcblxyXG4gICAgaWYgKG1hcHBpbmcpIHtcclxuICAgICAgcmV0dXJuIG1hcHBpbmcubG9jYWxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==