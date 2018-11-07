"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var marked = require("marked");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var environment_prod_1 = require("../../environments/environment.prod");
var settings_service_1 = require("./settings.service");
var event_item_model_1 = require("../models/event-item.model");
var info_item_model_1 = require("../models/info-item.model");
var simple_content_model_1 = require("../models/simple-content.model");
var speaker_model_1 = require("../models/speaker.model");
var workshop_model_1 = require("../models/workshop.model");
var error_service_1 = require("./error.service");
var EventContentTypes;
(function (EventContentTypes) {
    EventContentTypes["SPEAKER"] = "speaker";
    EventContentTypes["WORKSHOP"] = "workshop";
    EventContentTypes["EVENT_ITEM"] = "eventItem";
    EventContentTypes["SIMPLE_CONTENT"] = "simpleContent";
    EventContentTypes["INFO_ITEM"] = "infoItem";
})(EventContentTypes = exports.EventContentTypes || (exports.EventContentTypes = {}));
var EventItemType;
(function (EventItemType) {
    EventItemType["NGPOLAND"] = "ngPoland";
    EventItemType["JSPOLAND"] = "jsPoland";
})(EventItemType = exports.EventItemType || (exports.EventItemType = {}));
var ContentfulService = /** @class */ (function () {
    function ContentfulService(settings, http, errorService) {
        this.settings = settings;
        this.http = http;
        this.errorService = errorService;
        this.timeoutTime = 20000;
        this.delayWhenTime = 10000;
        this.CONTENTFUL_URL = "http://cdn.contentful.com";
        this.CONTENTFUL_URL_ENTRIES = this.CONTENTFUL_URL + "/spaces/" + environment_prod_1.environment.contentful.spaceId + "/environments/master/entries?access_token=" + environment_prod_1.environment.contentful.token;
    }
    ContentfulService.prototype.getContentfulUrlEntry = function (entryId) {
        return "http://cdn.contentful.com/spaces/" + environment_prod_1.environment.contentful.spaceId + "/environments/master/entries/" + entryId + "?access_token=" + environment_prod_1.environment.contentful.token;
    };
    ContentfulService.prototype.getContentfulUrlParameters = function (params) {
        return Object.entries(params)
            .map(function (_a) {
            var key = _a[0], val = _a[1];
            return key + "=" + val;
        })
            .join("&");
    };
    ContentfulService.prototype.getInfoItems = function (howMany) {
        var _this = this;
        var query = {
            content_type: EventContentTypes.INFO_ITEM,
            locale: this.settings.getLocale(),
            order: "fields.order",
            limit: howMany
        };
        this.errorService.resetCounter();
        return this.http
            .get(this.CONTENTFUL_URL_ENTRIES + "&" + this.getContentfulUrlParameters(query), { responseType: "json" })
            .pipe(operators_1.shareReplay(), operators_1.timeout(this.timeoutTime), operators_1.retryWhen(function (errors) {
            return errors.pipe(operators_1.delayWhen(function () { return rxjs_1.timer(_this.delayWhenTime); }), operators_1.take(5), operators_1.tap(function () {
                _this.errorService.showNoConnectionDlg();
            }));
        }), operators_1.map(function (entries) {
            return entries.items.map(function (item) {
                return new info_item_model_1.InfoItem(item.fields.title, item.fields.ordre, item.fields.icon, item.fields.description, item.fields.urlLink);
            });
        }));
    };
    ContentfulService.prototype.getEventItems = function (howMany, type) {
        var _this = this;
        var query = {
            content_type: EventContentTypes.EVENT_ITEM,
            locale: this.settings.getLocale(),
            "fields.type": type,
            order: "fields.startDate",
            limit: howMany
        };
        this.errorService.resetCounter();
        return this.http
            .get(this.CONTENTFUL_URL_ENTRIES + "&" + this.getContentfulUrlParameters(query), { responseType: "json" })
            .pipe(operators_1.shareReplay(), operators_1.timeout(this.timeoutTime), operators_1.retryWhen(function (errors) {
            return errors.pipe(operators_1.delayWhen(function () { return rxjs_1.timer(_this.delayWhenTime); }), operators_1.take(5), operators_1.tap(function () {
                _this.errorService.showNoConnectionDlg();
            }));
        }), operators_1.map(function (entries) {
            var assets = null;
            var links = null;
            if (entries.includes) {
                assets = entries.includes.Asset;
                links = entries.includes.Entry;
            }
            return entries.items.map(function (item) {
                var speaker = null;
                if (links && item.fields.presenter) {
                    speaker = _this.getEntryById(links, item.fields.presenter.sys.id);
                }
                var speakerPhoto = null;
                if (speaker) {
                    speakerPhoto = _this.getAssetById(assets, speaker.fields.photo.sys.id);
                }
                return new event_item_model_1.EventItem(item.fields.title, item.fields.type, item.fields.category, item.fields.shortDescription, item.fields.description, item.fields.startDate, item.fields.endDate, speaker
                    ? new speaker_model_1.Speaker(speaker.fields.name, speaker.fields.role, speaker.fields.bio, speakerPhoto ? speakerPhoto.fields.file.url : undefined, speakerPhoto ? speakerPhoto.fields.title : undefined, speakerPhoto ? speakerPhoto.fields.description : undefined, speaker.fields.email, speaker.fields.urlGithub, speaker.fields.urlLinkedIn, speaker.fields.urlTwitter, speaker.fields.urlWww)
                    : undefined);
            });
        }));
    };
    ContentfulService.prototype.getSimpleContentById = function (myId) {
        var _this = this;
        var query = {
            content_type: EventContentTypes.SIMPLE_CONTENT,
            locale: this.settings.getLocale(),
            "fields.myId": myId,
            limit: 1
        };
        this.errorService.resetCounter();
        return this.http
            .get(this.CONTENTFUL_URL_ENTRIES + "&" + this.getContentfulUrlParameters(query), { responseType: "json" })
            .pipe(operators_1.shareReplay(), operators_1.timeout(this.timeoutTime), operators_1.retryWhen(function (errors) {
            return errors.pipe(operators_1.delayWhen(function () { return rxjs_1.timer(_this.delayWhenTime); }), operators_1.take(5), operators_1.tap(function () {
                _this.errorService.showNoConnectionDlg();
            }));
        }), operators_1.map(function (entries) {
            if (entries && entries.items && entries.items[0]) {
                return new simple_content_model_1.SimpleContent(entries.items[0].fields.myId, entries.items[0].fields.title, entries.items[0].fields.text);
            }
            else {
                return new simple_content_model_1.SimpleContent("000", "nie udało się", "nie wyszło coś");
            }
        }));
    };
    ContentfulService.prototype.getWorkshops = function (howMany) {
        var _this = this;
        var query = {
            content_type: EventContentTypes.WORKSHOP,
            locale: this.settings.getLocale(),
            order: "sys.createdAt",
            limit: howMany
        };
        this.errorService.resetCounter();
        return this.http
            .get(this.CONTENTFUL_URL_ENTRIES + "&" + this.getContentfulUrlParameters(query), { responseType: "json" })
            .pipe(operators_1.shareReplay(), operators_1.timeout(this.timeoutTime), operators_1.retryWhen(function (errors) {
            return errors.pipe(operators_1.delayWhen(function () { return rxjs_1.timer(_this.delayWhenTime); }), operators_1.take(5), operators_1.tap(function () {
                _this.errorService.showNoConnectionDlg();
            }));
        }), operators_1.map(function (entries) {
            var assets = entries.includes.Asset;
            var links = entries.includes.Entry;
            return entries.items.map(function (item) {
                //  const profilePhoto: Asset = this.getAssetById(assets, item.fields.photo.sys.id);
                var speaker = _this.getEntryById(links, item.fields.instructor.sys.id);
                // console.log("Spekaer: ", speaker);
                var speakerPhoto = _this.getAssetById(assets, speaker.fields.photo.sys.id);
                return new workshop_model_1.Workshop(item.fields.title, item.fields.description, new speaker_model_1.Speaker(speaker.fields.name, speaker.fields.role, speaker.fields.bio, speakerPhoto ? speakerPhoto.fields.file.url : undefined, speakerPhoto ? speakerPhoto.fields.title : undefined, speakerPhoto ? speakerPhoto.fields.description : undefined, speaker.fields.email, speaker.fields.urlGithub, speaker.fields.urlLinkedIn, speaker.fields.urlTwitter, speaker.fields.urlWww), item.fields.startDate, item.fields.endDate, 0, // TODO: zamienić na współrzędne
                0, // TODO: zamienić na współrzędne
                item.fields.locationDescription, item.fields.pricePln);
            });
        }));
    };
    ContentfulService.prototype.getSpeakers = function (howMany) {
        var _this = this;
        var query = {
            content_type: EventContentTypes.SPEAKER,
            locale: this.settings.getLocale(),
            order: "sys.createdAt",
            limit: howMany
        };
        this.errorService.resetCounter();
        return this.http
            .get(this.CONTENTFUL_URL_ENTRIES + "&" + this.getContentfulUrlParameters(query), { responseType: "json" })
            .pipe(operators_1.shareReplay(), operators_1.timeout(this.timeoutTime), operators_1.retryWhen(function (errors) {
            return errors.pipe(operators_1.delayWhen(function () { return rxjs_1.timer(_this.delayWhenTime); }), operators_1.take(5), operators_1.tap(function () {
                _this.errorService.showNoConnectionDlg();
            }));
        }), operators_1.map(function (entries) {
            var assets = entries.includes.Asset;
            return entries.items.map(function (item) {
                var profilePhoto = _this.getAssetById(assets, item.fields.photo.sys.id);
                return new speaker_model_1.Speaker(item.fields.name, item.fields.role, item.fields.bio, profilePhoto ? profilePhoto.fields.file.url : undefined, profilePhoto ? profilePhoto.fields.title : undefined, profilePhoto ? profilePhoto.fields.description : undefined, item.fields.email, item.fields.urlGithub, item.fields.urlLinkedIn, item.fields.urlTwitter, item.fields.urlWww);
            });
        }));
    };
    ContentfulService.prototype.markdownToHtml = function (md) {
        return marked(md);
    };
    ContentfulService.prototype.getAssetById = function (assetArray, id) {
        if (assetArray && assetArray.length > 0) {
            var newArray = assetArray.filter(function (item) { return item.sys.id === id; });
            if (newArray && newArray.length > 0) {
                return newArray[0];
            }
        }
        return {};
    };
    ContentfulService.prototype.getAssetsByIds = function (assetArray, ids) {
        if (assetArray && assetArray.length > 0 && ids && ids.length > 0) {
            var newArray = assetArray.filter(function (item) {
                return ids.includes(item.sys.id);
            });
            return newArray;
        }
        return {};
    };
    ContentfulService.prototype.getEntryById = function (entriesArray, id) {
        if (entriesArray && entriesArray.length > 0) {
            var newArray = entriesArray.filter(function (item) { return item.sys.id === id; });
            if (newArray && newArray.length > 0) {
                return newArray[0];
            }
        }
        return {};
    };
    ContentfulService.prototype.getEntriesByContentType = function (entriesArray, contentType) {
        if (entriesArray && entriesArray.length > 0) {
            var newArray = entriesArray.filter(function (item) { return item.sys.contentType.sys.id === contentType; });
            if (newArray && newArray.length > 0) {
                return newArray;
            }
        }
        return {};
    };
    ContentfulService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [settings_service_1.SettingsService, http_1.HttpClient, error_service_1.ErrorService])
    ], ContentfulService);
    return ContentfulService;
}());
exports.ContentfulService = ContentfulService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGZ1bC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGVudGZ1bC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQWtEO0FBQ2xELHNDQUEyQztBQUUzQywrQkFBaUM7QUFDakMsNkJBQXlDO0FBQ3pDLDRDQVN3QjtBQUN4Qix3RUFBa0U7QUFDbEUsdURBQXFEO0FBRXJELCtEQUF1RDtBQUN2RCw2REFBcUQ7QUFDckQsdUVBQStEO0FBQy9ELHlEQUFrRDtBQUNsRCwyREFBb0Q7QUFDcEQsaURBQStDO0FBRS9DLElBQVksaUJBTVg7QUFORCxXQUFZLGlCQUFpQjtJQUMzQix3Q0FBbUIsQ0FBQTtJQUNuQiwwQ0FBcUIsQ0FBQTtJQUNyQiw2Q0FBd0IsQ0FBQTtJQUN4QixxREFBZ0MsQ0FBQTtJQUNoQywyQ0FBc0IsQ0FBQTtBQUN4QixDQUFDLEVBTlcsaUJBQWlCLEdBQWpCLHlCQUFpQixLQUFqQix5QkFBaUIsUUFNNUI7QUFFRCxJQUFZLGFBR1g7QUFIRCxXQUFZLGFBQWE7SUFDdkIsc0NBQXFCLENBQUE7SUFDckIsc0NBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQUhXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBR3hCO0FBS0Q7SUFTRSwyQkFBb0IsUUFBeUIsRUFBVSxJQUFnQixFQUFVLFlBQTBCO1FBQXZGLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBUjNHLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRUwsbUJBQWMsR0FBRywyQkFBMkIsQ0FBQztRQUM3QywyQkFBc0IsR0FBTSxJQUFJLENBQUMsY0FBYyxnQkFDOUQsOEJBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxrREFDYSw4QkFBVyxDQUFDLFVBQVUsQ0FBQyxLQUFPLENBQUM7SUFFa0MsQ0FB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QkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FVOEIsa0NBQWUsRUFBZ0IsaUJBQVUsRUFBd0IsNEJBQVk7T0FUaEcsaUJBQWlCLENBdVg3QjtJQUFELHdCQUFDO0NBQUEsQUF2WEQsSUF1WEM7QUF2WFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQXNzZXQsIEVudHJ5LCBFbnRyeUNvbGxlY3Rpb24gfSBmcm9tIFwiY29udGVudGZ1bFwiO1xyXG5pbXBvcnQgKiBhcyBtYXJrZWQgZnJvbSBcIm1hcmtlZFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aW1lciB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7XHJcbiAgZGVsYXlXaGVuLFxyXG4gIG1hcCxcclxuICByZXRyeSxcclxuICByZXRyeVdoZW4sXHJcbiAgc2hhcmVSZXBsYXksXHJcbiAgdGFrZSxcclxuICB0YXAsXHJcbiAgdGltZW91dFxyXG59IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gXCIuLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQucHJvZFwiO1xyXG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tIFwiLi9zZXR0aW5ncy5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBFdmVudEl0ZW0gfSBmcm9tIFwiLi4vbW9kZWxzL2V2ZW50LWl0ZW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgSW5mb0l0ZW0gfSBmcm9tIFwiLi4vbW9kZWxzL2luZm8taXRlbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBTaW1wbGVDb250ZW50IH0gZnJvbSBcIi4uL21vZGVscy9zaW1wbGUtY29udGVudC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBTcGVha2VyIH0gZnJvbSBcIi4uL21vZGVscy9zcGVha2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IFdvcmtzaG9wIH0gZnJvbSBcIi4uL21vZGVscy93b3Jrc2hvcC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tIFwiLi9lcnJvci5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZW51bSBFdmVudENvbnRlbnRUeXBlcyB7XHJcbiAgU1BFQUtFUiA9IFwic3BlYWtlclwiLFxyXG4gIFdPUktTSE9QID0gXCJ3b3Jrc2hvcFwiLFxyXG4gIEVWRU5UX0lURU0gPSBcImV2ZW50SXRlbVwiLFxyXG4gIFNJTVBMRV9DT05URU5UID0gXCJzaW1wbGVDb250ZW50XCIsXHJcbiAgSU5GT19JVEVNID0gXCJpbmZvSXRlbVwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEV2ZW50SXRlbVR5cGUge1xyXG4gIE5HUE9MQU5EID0gXCJuZ1BvbGFuZFwiLFxyXG4gIEpTUE9MQU5EID0gXCJqc1BvbGFuZFwiXHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGVudGZ1bFNlcnZpY2Uge1xyXG4gIHRpbWVvdXRUaW1lID0gMjAwMDA7XHJcbiAgZGVsYXlXaGVuVGltZSA9IDEwMDAwO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IENPTlRFTlRGVUxfVVJMID0gXCJodHRwOi8vY2RuLmNvbnRlbnRmdWwuY29tXCI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBDT05URU5URlVMX1VSTF9FTlRSSUVTID0gYCR7dGhpcy5DT05URU5URlVMX1VSTH0vc3BhY2VzLyR7XHJcbiAgICBlbnZpcm9ubWVudC5jb250ZW50ZnVsLnNwYWNlSWRcclxuICB9L2Vudmlyb25tZW50cy9tYXN0ZXIvZW50cmllcz9hY2Nlc3NfdG9rZW49JHtlbnZpcm9ubWVudC5jb250ZW50ZnVsLnRva2VufWA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7fVxyXG5cclxuICBnZXRDb250ZW50ZnVsVXJsRW50cnkoZW50cnlJZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgaHR0cDovL2Nkbi5jb250ZW50ZnVsLmNvbS9zcGFjZXMvJHtcclxuICAgICAgZW52aXJvbm1lbnQuY29udGVudGZ1bC5zcGFjZUlkXHJcbiAgICB9L2Vudmlyb25tZW50cy9tYXN0ZXIvZW50cmllcy8ke2VudHJ5SWR9P2FjY2Vzc190b2tlbj0ke1xyXG4gICAgICBlbnZpcm9ubWVudC5jb250ZW50ZnVsLnRva2VuXHJcbiAgICB9YDtcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnRmdWxVcmxQYXJhbWV0ZXJzKHBhcmFtczoge30pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHBhcmFtcylcclxuICAgICAgLm1hcCgoW2tleSwgdmFsXSkgPT4gYCR7a2V5fT0ke3ZhbH1gKVxyXG4gICAgICAuam9pbihcIiZcIik7XHJcbiAgfVxyXG5cclxuICBnZXRJbmZvSXRlbXMoaG93TWFueTogbnVtYmVyKTogT2JzZXJ2YWJsZTxBcnJheTxJbmZvSXRlbT4+IHtcclxuICAgIGNvbnN0IHF1ZXJ5ID0ge1xyXG4gICAgICBjb250ZW50X3R5cGU6IEV2ZW50Q29udGVudFR5cGVzLklORk9fSVRFTSxcclxuICAgICAgbG9jYWxlOiB0aGlzLnNldHRpbmdzLmdldExvY2FsZSgpLFxyXG4gICAgICBvcmRlcjogXCJmaWVsZHMub3JkZXJcIixcclxuICAgICAgbGltaXQ6IGhvd01hbnlcclxuICAgIH07XHJcbiAgICB0aGlzLmVycm9yU2VydmljZS5yZXNldENvdW50ZXIoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQoXHJcbiAgICAgICAgYCR7dGhpcy5DT05URU5URlVMX1VSTF9FTlRSSUVTfSYke3RoaXMuZ2V0Q29udGVudGZ1bFVybFBhcmFtZXRlcnMoXHJcbiAgICAgICAgICBxdWVyeVxyXG4gICAgICAgICl9YCxcclxuICAgICAgICB7IHJlc3BvbnNlVHlwZTogXCJqc29uXCIgfVxyXG4gICAgICApXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHNoYXJlUmVwbGF5KCksXHJcbiAgICAgICAgdGltZW91dCh0aGlzLnRpbWVvdXRUaW1lKSxcclxuICAgICAgICByZXRyeVdoZW4oKGVycm9yczogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZXJyb3JzLnBpcGUoXHJcbiAgICAgICAgICAgIGRlbGF5V2hlbigoKSA9PiB0aW1lcih0aGlzLmRlbGF5V2hlblRpbWUpKSxcclxuICAgICAgICAgICAgdGFrZSg1KSxcclxuICAgICAgICAgICAgdGFwKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmVycm9yU2VydmljZS5zaG93Tm9Db25uZWN0aW9uRGxnKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIG1hcCgoZW50cmllczogRW50cnlDb2xsZWN0aW9uPEluZm9JdGVtPikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGVudHJpZXMuaXRlbXMubWFwKChpdGVtOiBFbnRyeTxhbnk+KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW5mb0l0ZW0oXHJcbiAgICAgICAgICAgICAgaXRlbS5maWVsZHMudGl0bGUsXHJcbiAgICAgICAgICAgICAgaXRlbS5maWVsZHMub3JkcmUsXHJcbiAgICAgICAgICAgICAgaXRlbS5maWVsZHMuaWNvbixcclxuICAgICAgICAgICAgICBpdGVtLmZpZWxkcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICBpdGVtLmZpZWxkcy51cmxMaW5rXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0RXZlbnRJdGVtcyhcclxuICAgIGhvd01hbnk6IG51bWJlcixcclxuICAgIHR5cGU6IEV2ZW50SXRlbVR5cGVcclxuICApOiBPYnNlcnZhYmxlPEFycmF5PEV2ZW50SXRlbT4+IHtcclxuICAgIGNvbnN0IHF1ZXJ5ID0ge1xyXG4gICAgICBjb250ZW50X3R5cGU6IEV2ZW50Q29udGVudFR5cGVzLkVWRU5UX0lURU0sXHJcbiAgICAgIGxvY2FsZTogdGhpcy5zZXR0aW5ncy5nZXRMb2NhbGUoKSxcclxuICAgICAgXCJmaWVsZHMudHlwZVwiOiB0eXBlLFxyXG4gICAgICBvcmRlcjogXCJmaWVsZHMuc3RhcnREYXRlXCIsXHJcbiAgICAgIGxpbWl0OiBob3dNYW55XHJcbiAgICB9O1xyXG4gICAgdGhpcy5lcnJvclNlcnZpY2UucmVzZXRDb3VudGVyKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KFxyXG4gICAgICAgIGAke3RoaXMuQ09OVEVOVEZVTF9VUkxfRU5UUklFU30mJHt0aGlzLmdldENvbnRlbnRmdWxVcmxQYXJhbWV0ZXJzKFxyXG4gICAgICAgICAgcXVlcnlcclxuICAgICAgICApfWAsXHJcbiAgICAgICAgeyByZXNwb25zZVR5cGU6IFwianNvblwiIH1cclxuICAgICAgKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBzaGFyZVJlcGxheSgpLFxyXG4gICAgICAgIHRpbWVvdXQodGhpcy50aW1lb3V0VGltZSksXHJcbiAgICAgICAgcmV0cnlXaGVuKChlcnJvcnM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGVycm9ycy5waXBlKFxyXG4gICAgICAgICAgICBkZWxheVdoZW4oKCkgPT4gdGltZXIodGhpcy5kZWxheVdoZW5UaW1lKSksXHJcbiAgICAgICAgICAgIHRha2UoNSksXHJcbiAgICAgICAgICAgIHRhcCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5lcnJvclNlcnZpY2Uuc2hvd05vQ29ubmVjdGlvbkRsZygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBtYXAoKGVudHJpZXM6IEVudHJ5Q29sbGVjdGlvbjxFdmVudEl0ZW0+KSA9PiB7XHJcbiAgICAgICAgICBsZXQgYXNzZXRzOiBBcnJheTxBc3NldD4gPSBudWxsO1xyXG4gICAgICAgICAgbGV0IGxpbmtzOiBBcnJheTxFbnRyeTxhbnk+PiA9IG51bGw7XHJcblxyXG4gICAgICAgICAgaWYgKGVudHJpZXMuaW5jbHVkZXMpIHtcclxuICAgICAgICAgICAgYXNzZXRzID0gZW50cmllcy5pbmNsdWRlcy5Bc3NldDtcclxuICAgICAgICAgICAgbGlua3MgPSBlbnRyaWVzLmluY2x1ZGVzLkVudHJ5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBlbnRyaWVzLml0ZW1zLm1hcCgoaXRlbTogRW50cnk8YW55PikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3BlYWtlciA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChsaW5rcyAmJiBpdGVtLmZpZWxkcy5wcmVzZW50ZXIpIHtcclxuICAgICAgICAgICAgICBzcGVha2VyID0gdGhpcy5nZXRFbnRyeUJ5SWQobGlua3MsIGl0ZW0uZmllbGRzLnByZXNlbnRlci5zeXMuaWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgc3BlYWtlclBob3RvID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHNwZWFrZXIpIHtcclxuICAgICAgICAgICAgICBzcGVha2VyUGhvdG8gPSB0aGlzLmdldEFzc2V0QnlJZChcclxuICAgICAgICAgICAgICAgIGFzc2V0cyxcclxuICAgICAgICAgICAgICAgIHNwZWFrZXIuZmllbGRzLnBob3RvLnN5cy5pZFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXZlbnRJdGVtKFxyXG4gICAgICAgICAgICAgIGl0ZW0uZmllbGRzLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGl0ZW0uZmllbGRzLnR5cGUsXHJcbiAgICAgICAgICAgICAgaXRlbS5maWVsZHMuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgaXRlbS5maWVsZHMuc2hvcnREZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICBpdGVtLmZpZWxkcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICBpdGVtLmZpZWxkcy5zdGFydERhdGUsXHJcbiAgICAgICAgICAgICAgaXRlbS5maWVsZHMuZW5kRGF0ZSxcclxuICAgICAgICAgICAgICBzcGVha2VyXHJcbiAgICAgICAgICAgICAgICA/IG5ldyBTcGVha2VyKFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXIuZmllbGRzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlci5maWVsZHMucm9sZSxcclxuICAgICAgICAgICAgICAgICAgICBzcGVha2VyLmZpZWxkcy5iaW8sXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlclBob3RvID8gc3BlYWtlclBob3RvLmZpZWxkcy5maWxlLnVybCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBzcGVha2VyUGhvdG8gPyBzcGVha2VyUGhvdG8uZmllbGRzLnRpdGxlIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXJQaG90byA/IHNwZWFrZXJQaG90by5maWVsZHMuZGVzY3JpcHRpb24gOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlci5maWVsZHMuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlci5maWVsZHMudXJsR2l0aHViLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXIuZmllbGRzLnVybExpbmtlZEluLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXIuZmllbGRzLnVybFR3aXR0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlci5maWVsZHMudXJsV3d3XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2ltcGxlQ29udGVudEJ5SWQobXlJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxTaW1wbGVDb250ZW50PiB7XHJcbiAgICBjb25zdCBxdWVyeSA9IHtcclxuICAgICAgY29udGVudF90eXBlOiBFdmVudENvbnRlbnRUeXBlcy5TSU1QTEVfQ09OVEVOVCxcclxuICAgICAgbG9jYWxlOiB0aGlzLnNldHRpbmdzLmdldExvY2FsZSgpLFxyXG4gICAgICBcImZpZWxkcy5teUlkXCI6IG15SWQsXHJcbiAgICAgIGxpbWl0OiAxXHJcbiAgICB9O1xyXG4gICAgdGhpcy5lcnJvclNlcnZpY2UucmVzZXRDb3VudGVyKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KFxyXG4gICAgICAgIGAke3RoaXMuQ09OVEVOVEZVTF9VUkxfRU5UUklFU30mJHt0aGlzLmdldENvbnRlbnRmdWxVcmxQYXJhbWV0ZXJzKFxyXG4gICAgICAgICAgcXVlcnlcclxuICAgICAgICApfWAsXHJcbiAgICAgICAgeyByZXNwb25zZVR5cGU6IFwianNvblwiIH1cclxuICAgICAgKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBzaGFyZVJlcGxheSgpLFxyXG4gICAgICAgIHRpbWVvdXQodGhpcy50aW1lb3V0VGltZSksXHJcbiAgICAgICAgcmV0cnlXaGVuKChlcnJvcnM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGVycm9ycy5waXBlKFxyXG4gICAgICAgICAgICBkZWxheVdoZW4oKCkgPT4gdGltZXIodGhpcy5kZWxheVdoZW5UaW1lKSksXHJcbiAgICAgICAgICAgIHRha2UoNSksXHJcbiAgICAgICAgICAgIHRhcCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5lcnJvclNlcnZpY2Uuc2hvd05vQ29ubmVjdGlvbkRsZygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBtYXAoKGVudHJpZXM6IEVudHJ5Q29sbGVjdGlvbjxTaW1wbGVDb250ZW50PikgPT4ge1xyXG4gICAgICAgICAgaWYgKGVudHJpZXMgJiYgZW50cmllcy5pdGVtcyAmJiBlbnRyaWVzLml0ZW1zWzBdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2ltcGxlQ29udGVudChcclxuICAgICAgICAgICAgICBlbnRyaWVzLml0ZW1zWzBdLmZpZWxkcy5teUlkLFxyXG4gICAgICAgICAgICAgIGVudHJpZXMuaXRlbXNbMF0uZmllbGRzLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGVudHJpZXMuaXRlbXNbMF0uZmllbGRzLnRleHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2ltcGxlQ29udGVudChcIjAwMFwiLCBcIm5pZSB1ZGHFgm8gc2nEmVwiLCBcIm5pZSB3eXN6xYJvIGNvxZtcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIGdldFdvcmtzaG9wcyhob3dNYW55OiBudW1iZXIpOiBPYnNlcnZhYmxlPEFycmF5PFdvcmtzaG9wPj4ge1xyXG4gICAgY29uc3QgcXVlcnkgPSB7XHJcbiAgICAgIGNvbnRlbnRfdHlwZTogRXZlbnRDb250ZW50VHlwZXMuV09SS1NIT1AsXHJcbiAgICAgIGxvY2FsZTogdGhpcy5zZXR0aW5ncy5nZXRMb2NhbGUoKSxcclxuICAgICAgb3JkZXI6IFwic3lzLmNyZWF0ZWRBdFwiLFxyXG4gICAgICBsaW1pdDogaG93TWFueVxyXG4gICAgfTtcclxuICAgIHRoaXMuZXJyb3JTZXJ2aWNlLnJlc2V0Q291bnRlcigpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldChcclxuICAgICAgICBgJHt0aGlzLkNPTlRFTlRGVUxfVVJMX0VOVFJJRVN9JiR7dGhpcy5nZXRDb250ZW50ZnVsVXJsUGFyYW1ldGVycyhcclxuICAgICAgICAgIHF1ZXJ5XHJcbiAgICAgICAgKX1gLFxyXG4gICAgICAgIHsgcmVzcG9uc2VUeXBlOiBcImpzb25cIiB9XHJcbiAgICAgIClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgc2hhcmVSZXBsYXkoKSxcclxuICAgICAgICB0aW1lb3V0KHRoaXMudGltZW91dFRpbWUpLFxyXG4gICAgICAgIHJldHJ5V2hlbigoZXJyb3JzOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJldHVybiBlcnJvcnMucGlwZShcclxuICAgICAgICAgICAgZGVsYXlXaGVuKCgpID0+IHRpbWVyKHRoaXMuZGVsYXlXaGVuVGltZSkpLFxyXG4gICAgICAgICAgICB0YWtlKDUpLFxyXG4gICAgICAgICAgICB0YXAoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JTZXJ2aWNlLnNob3dOb0Nvbm5lY3Rpb25EbGcoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgbWFwKChlbnRyaWVzOiBFbnRyeUNvbGxlY3Rpb248YW55PikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYXNzZXRzOiBBcnJheTxBc3NldD4gPSBlbnRyaWVzLmluY2x1ZGVzLkFzc2V0O1xyXG4gICAgICAgICAgY29uc3QgbGlua3M6IEFycmF5PEVudHJ5PGFueT4+ID0gZW50cmllcy5pbmNsdWRlcy5FbnRyeTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gZW50cmllcy5pdGVtcy5tYXAoKGl0ZW06IEVudHJ5PGFueT4pID0+IHtcclxuICAgICAgICAgICAgLy8gIGNvbnN0IHByb2ZpbGVQaG90bzogQXNzZXQgPSB0aGlzLmdldEFzc2V0QnlJZChhc3NldHMsIGl0ZW0uZmllbGRzLnBob3RvLnN5cy5pZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWFrZXIgPSB0aGlzLmdldEVudHJ5QnlJZChcclxuICAgICAgICAgICAgICBsaW5rcyxcclxuICAgICAgICAgICAgICBpdGVtLmZpZWxkcy5pbnN0cnVjdG9yLnN5cy5pZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNwZWthZXI6IFwiLCBzcGVha2VyKTtcclxuICAgICAgICAgICAgY29uc3Qgc3BlYWtlclBob3RvID0gdGhpcy5nZXRBc3NldEJ5SWQoXHJcbiAgICAgICAgICAgICAgYXNzZXRzLFxyXG4gICAgICAgICAgICAgIHNwZWFrZXIuZmllbGRzLnBob3RvLnN5cy5pZFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3Jrc2hvcChcclxuICAgICAgICAgICAgICBpdGVtLmZpZWxkcy50aXRsZSxcclxuICAgICAgICAgICAgICBpdGVtLmZpZWxkcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICBuZXcgU3BlYWtlcihcclxuICAgICAgICAgICAgICAgIHNwZWFrZXIuZmllbGRzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBzcGVha2VyLmZpZWxkcy5yb2xlLFxyXG4gICAgICAgICAgICAgICAgc3BlYWtlci5maWVsZHMuYmlvLFxyXG4gICAgICAgICAgICAgICAgc3BlYWtlclBob3RvID8gc3BlYWtlclBob3RvLmZpZWxkcy5maWxlLnVybCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHNwZWFrZXJQaG90byA/IHNwZWFrZXJQaG90by5maWVsZHMudGl0bGUgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBzcGVha2VyUGhvdG8gPyBzcGVha2VyUGhvdG8uZmllbGRzLmRlc2NyaXB0aW9uIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgc3BlYWtlci5maWVsZHMuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBzcGVha2VyLmZpZWxkcy51cmxHaXRodWIsXHJcbiAgICAgICAgICAgICAgICBzcGVha2VyLmZpZWxkcy51cmxMaW5rZWRJbixcclxuICAgICAgICAgICAgICAgIHNwZWFrZXIuZmllbGRzLnVybFR3aXR0ZXIsXHJcbiAgICAgICAgICAgICAgICBzcGVha2VyLmZpZWxkcy51cmxXd3dcclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIGl0ZW0uZmllbGRzLnN0YXJ0RGF0ZSxcclxuICAgICAgICAgICAgICBpdGVtLmZpZWxkcy5lbmREYXRlLFxyXG4gICAgICAgICAgICAgIDAsIC8vIFRPRE86IHphbWllbmnEhyBuYSB3c3DDs8WCcnrEmWRuZVxyXG4gICAgICAgICAgICAgIDAsIC8vIFRPRE86IHphbWllbmnEhyBuYSB3c3DDs8WCcnrEmWRuZVxyXG4gICAgICAgICAgICAgIGl0ZW0uZmllbGRzLmxvY2F0aW9uRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgaXRlbS5maWVsZHMucHJpY2VQbG5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRTcGVha2Vycyhob3dNYW55OiBudW1iZXIpOiBPYnNlcnZhYmxlPEFycmF5PFNwZWFrZXI+PiB7XHJcbiAgICBjb25zdCBxdWVyeSA9IHtcclxuICAgICAgY29udGVudF90eXBlOiBFdmVudENvbnRlbnRUeXBlcy5TUEVBS0VSLFxyXG4gICAgICBsb2NhbGU6IHRoaXMuc2V0dGluZ3MuZ2V0TG9jYWxlKCksXHJcbiAgICAgIG9yZGVyOiBcInN5cy5jcmVhdGVkQXRcIixcclxuICAgICAgbGltaXQ6IGhvd01hbnlcclxuICAgIH07XHJcbiAgICB0aGlzLmVycm9yU2VydmljZS5yZXNldENvdW50ZXIoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQoXHJcbiAgICAgICAgYCR7dGhpcy5DT05URU5URlVMX1VSTF9FTlRSSUVTfSYke3RoaXMuZ2V0Q29udGVudGZ1bFVybFBhcmFtZXRlcnMoXHJcbiAgICAgICAgICBxdWVyeVxyXG4gICAgICAgICl9YCxcclxuICAgICAgICB7IHJlc3BvbnNlVHlwZTogXCJqc29uXCIgfVxyXG4gICAgICApXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHNoYXJlUmVwbGF5KCksXHJcbiAgICAgICAgdGltZW91dCh0aGlzLnRpbWVvdXRUaW1lKSxcclxuICAgICAgICByZXRyeVdoZW4oKGVycm9yczogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZXJyb3JzLnBpcGUoXHJcbiAgICAgICAgICAgIGRlbGF5V2hlbigoKSA9PiB0aW1lcih0aGlzLmRlbGF5V2hlblRpbWUpKSxcclxuICAgICAgICAgICAgdGFrZSg1KSxcclxuICAgICAgICAgICAgdGFwKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmVycm9yU2VydmljZS5zaG93Tm9Db25uZWN0aW9uRGxnKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIG1hcCgoZW50cmllczogRW50cnlDb2xsZWN0aW9uPGFueT4pID0+IHtcclxuICAgICAgICAgIGNvbnN0IGFzc2V0czogQXJyYXk8QXNzZXQ+ID0gZW50cmllcy5pbmNsdWRlcy5Bc3NldDtcclxuXHJcbiAgICAgICAgICByZXR1cm4gZW50cmllcy5pdGVtcy5tYXAoKGl0ZW06IEVudHJ5PGFueT4pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZmlsZVBob3RvOiBBc3NldCA9IHRoaXMuZ2V0QXNzZXRCeUlkKFxyXG4gICAgICAgICAgICAgIGFzc2V0cyxcclxuICAgICAgICAgICAgICBpdGVtLmZpZWxkcy5waG90by5zeXMuaWRcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3BlYWtlcihcclxuICAgICAgICAgICAgICBpdGVtLmZpZWxkcy5uYW1lLFxyXG4gICAgICAgICAgICAgIGl0ZW0uZmllbGRzLnJvbGUsXHJcbiAgICAgICAgICAgICAgaXRlbS5maWVsZHMuYmlvLFxyXG4gICAgICAgICAgICAgIHByb2ZpbGVQaG90byA/IHByb2ZpbGVQaG90by5maWVsZHMuZmlsZS51cmwgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgcHJvZmlsZVBob3RvID8gcHJvZmlsZVBob3RvLmZpZWxkcy50aXRsZSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICBwcm9maWxlUGhvdG8gPyBwcm9maWxlUGhvdG8uZmllbGRzLmRlc2NyaXB0aW9uIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgIGl0ZW0uZmllbGRzLmVtYWlsLFxyXG4gICAgICAgICAgICAgIGl0ZW0uZmllbGRzLnVybEdpdGh1YixcclxuICAgICAgICAgICAgICBpdGVtLmZpZWxkcy51cmxMaW5rZWRJbixcclxuICAgICAgICAgICAgICBpdGVtLmZpZWxkcy51cmxUd2l0dGVyLFxyXG4gICAgICAgICAgICAgIGl0ZW0uZmllbGRzLnVybFd3d1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIG1hcmtkb3duVG9IdG1sKG1kOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBtYXJrZWQobWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRBc3NldEJ5SWQoYXNzZXRBcnJheTogQXJyYXk8QXNzZXQ+LCBpZDogc3RyaW5nKTogYW55IHtcclxuICAgIGlmIChhc3NldEFycmF5ICYmIGFzc2V0QXJyYXkubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBuZXdBcnJheSA9IGFzc2V0QXJyYXkuZmlsdGVyKChpdGVtOiBBc3NldCkgPT4gaXRlbS5zeXMuaWQgPT09IGlkKTtcclxuICAgICAgaWYgKG5ld0FycmF5ICYmIG5ld0FycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4gbmV3QXJyYXlbMF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEFzc2V0c0J5SWRzKGFzc2V0QXJyYXk6IEFycmF5PEFzc2V0PiwgaWRzOiBBcnJheTxzdHJpbmc+KTogYW55IHtcclxuICAgIGlmIChhc3NldEFycmF5ICYmIGFzc2V0QXJyYXkubGVuZ3RoID4gMCAmJiBpZHMgJiYgaWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgbmV3QXJyYXkgPSBhc3NldEFycmF5LmZpbHRlcigoaXRlbTogQXNzZXQpID0+IHtcclxuICAgICAgICByZXR1cm4gaWRzLmluY2x1ZGVzKGl0ZW0uc3lzLmlkKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gbmV3QXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRFbnRyeUJ5SWQoZW50cmllc0FycmF5OiBBcnJheTxFbnRyeTxhbnk+PiwgaWQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICBpZiAoZW50cmllc0FycmF5ICYmIGVudHJpZXNBcnJheS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IG5ld0FycmF5ID0gZW50cmllc0FycmF5LmZpbHRlcihcclxuICAgICAgICAoaXRlbTogRW50cnk8YW55PikgPT4gaXRlbS5zeXMuaWQgPT09IGlkXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChuZXdBcnJheSAmJiBuZXdBcnJheS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5WzBdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRFbnRyaWVzQnlDb250ZW50VHlwZShcclxuICAgIGVudHJpZXNBcnJheTogQXJyYXk8RW50cnk8YW55Pj4sXHJcbiAgICBjb250ZW50VHlwZTogRXZlbnRDb250ZW50VHlwZXNcclxuICApOiBhbnkge1xyXG4gICAgaWYgKGVudHJpZXNBcnJheSAmJiBlbnRyaWVzQXJyYXkubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBuZXdBcnJheSA9IGVudHJpZXNBcnJheS5maWx0ZXIoXHJcbiAgICAgICAgKGl0ZW06IEVudHJ5PGFueT4pID0+IGl0ZW0uc3lzLmNvbnRlbnRUeXBlLnN5cy5pZCA9PT0gY29udGVudFR5cGVcclxuICAgICAgKTtcclxuICAgICAgaWYgKG5ld0FycmF5ICYmIG5ld0FycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG59XHJcbiJdfQ==