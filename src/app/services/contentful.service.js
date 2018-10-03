"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var environment_prod_1 = require("../../environments/environment.prod");
var settings_service_1 = require("./settings.service");
var speaker_model_1 = require("../models/speaker.model");
var event_item_model_1 = require("../models/event-item.model");
var workshop_model_1 = require("../models/workshop.model");
var EventContentTypes;
(function (EventContentTypes) {
    EventContentTypes["SPEAKER"] = "speaker";
    EventContentTypes["WORKSHOP"] = "workshop";
    EventContentTypes["EVENT_ITEM"] = "eventItem";
})(EventContentTypes = exports.EventContentTypes || (exports.EventContentTypes = {}));
var EventItemType;
(function (EventItemType) {
    EventItemType["NGPOLAND"] = "ngPoland";
    EventItemType["JSPOLAND"] = "jsPoland";
})(EventItemType = exports.EventItemType || (exports.EventItemType = {}));
var ContentfulService = /** @class */ (function () {
    function ContentfulService(settings, http) {
        this.settings = settings;
        this.http = http;
        this.CONTENTFUL_URL = "https://cdn.contentful.com";
        this.CONTENTFUL_URL_ENTRIES = this.CONTENTFUL_URL + "/spaces/" + environment_prod_1.environment.contentful.spaceId + "/environments/master/entries?access_token=" + environment_prod_1.environment.contentful.token;
    }
    ContentfulService.prototype.getContentfulUrlEntry = function (entryId) {
        return "https://cdn.contentful.com/spaces/" + environment_prod_1.environment.contentful.spaceId + "/environments/master/entries/" + entryId + "?access_token=" + environment_prod_1.environment.contentful.token;
    };
    ContentfulService.prototype.getContentfulUrlParameters = function (params) {
        return Object.entries(params)
            .map(function (_a) {
            var key = _a[0], val = _a[1];
            return key + "=" + val;
        })
            .join("&");
    };
    ContentfulService.prototype.getEventItems = function (howMany, type) {
        var query = {
            content_type: EventContentTypes.EVENT_ITEM,
            locale: this.settings.getLocale(),
            'fields.type': type,
            order: "fields.startDate",
            limit: howMany
        };
        return this.http
            .get(this.CONTENTFUL_URL_ENTRIES + "&" + this.getContentfulUrlParameters(query), { responseType: "json" })
            .pipe(operators_1.map(function (entries) {
            //const assets: Array<Asset> = entries.includes.Asset;
            return entries.items.map(function (item) {
                //  const profilePhoto: Asset = this.getAssetById(assets, item.fields.photo.sys.id);
                return new event_item_model_1.EventItem(item.fields.title, item.fields.type, item.fields.shortDescription, item.fields.description, item.fields.startDate, item.fields.endDate, undefined // TODO: zamienić na pobieranie Speakera
                );
            });
        }));
    };
    ContentfulService.prototype.getWorkshops = function (howMany) {
        var query = {
            content_type: EventContentTypes.WORKSHOP,
            locale: this.settings.getLocale(),
            order: "sys.createdAt",
            limit: howMany
        };
        return this.http
            .get(this.CONTENTFUL_URL_ENTRIES + "&" + this.getContentfulUrlParameters(query), { responseType: "json" })
            .pipe(operators_1.map(function (entries) {
            //const assets: Array<Asset> = entries.includes.Asset;
            return entries.items.map(function (item) {
                //  const profilePhoto: Asset = this.getAssetById(assets, item.fields.photo.sys.id);
                return new workshop_model_1.Workshop(item.fields.title, item.fields.description, undefined, // TODO: zamienić na pobieranie Speakera
                item.fields.startDate, item.fields.endDate, 0, // TODO: zamienić na współrzędne
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
        return this.http
            .get(this.CONTENTFUL_URL_ENTRIES + "&" + this.getContentfulUrlParameters(query), { responseType: "json" })
            .pipe(operators_1.map(function (entries) {
            var assets = entries.includes.Asset;
            return entries.items.map(function (item) {
                var profilePhoto = _this.getAssetById(assets, item.fields.photo.sys.id);
                return new speaker_model_1.Speaker(item.fields.name, item.fields.role, item.fields.bio, profilePhoto ? profilePhoto.fields.file.url : undefined, profilePhoto ? profilePhoto.fields.title : undefined, profilePhoto ? profilePhoto.fields.description : undefined, item.fields.email, item.fields.urlGithub, item.fields.urlLinkedIn, item.fields.urlTwitter, item.fields.urlWww);
            });
        }));
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
        __metadata("design:paramtypes", [settings_service_1.SettingsService, http_1.HttpClient])
    ], ContentfulService);
    return ContentfulService;
}());
exports.ContentfulService = ContentfulService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGZ1bC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGVudGZ1bC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQWtEO0FBQ2xELHNDQUEyQztBQUczQyw0Q0FBcUM7QUFDckMsd0VBQWtFO0FBQ2xFLHVEQUFxRDtBQUVyRCx5REFBa0Q7QUFDbEQsK0RBQXVEO0FBQ3ZELDJEQUFvRDtBQUVwRCxJQUFZLGlCQUlYO0FBSkQsV0FBWSxpQkFBaUI7SUFDM0Isd0NBQW1CLENBQUE7SUFDbkIsMENBQXFCLENBQUE7SUFDckIsNkNBQXdCLENBQUE7QUFDMUIsQ0FBQyxFQUpXLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBSTVCO0FBRUQsSUFBWSxhQUdYO0FBSEQsV0FBWSxhQUFhO0lBQ3ZCLHNDQUFxQixDQUFBO0lBQ3JCLHNDQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFIVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUd4QjtBQUtEO0lBTUUsMkJBQW9CLFFBQXlCLEVBQVUsSUFBZ0I7UUFBbkQsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBTHRELG1CQUFjLEdBQUcsNEJBQTRCLENBQUM7UUFDOUMsMkJBQXNCLEdBQU0sSUFBSSxDQUFDLGNBQWMsZ0JBQzlELDhCQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sa0RBQ2EsOEJBQVcsQ0FBQyxVQUFVLENBQUMsS0FBTyxDQUFDO0lBRUYsQ0FBQztJQUUzRSxpREFBcUIsR0FBckIsVUFBc0IsT0FBZTtRQUNuQyxNQUFNLENBQUMsdUNBQ0wsOEJBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxxQ0FDQSxPQUFPLHNCQUNyQyw4QkFBVyxDQUFDLFVBQVUsQ0FBQyxLQUN2QixDQUFDO0lBQ0wsQ0FBQztJQUVELHNEQUEwQixHQUExQixVQUEyQixNQUFVO1FBQ25DLE1BQU0sQ0FBQyxNQUFNLENB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QztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVPLG1EQUF1QixHQUEvQixVQUNFLFlBQTBCLEVBQzFCLFdBQThCO1FBRTlCLEVBQUUsQ0FBQyxDQUFDLFlBQVksSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FDbEMsVUFBQyxJQUFnQixJQUFLLE9BQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxXQUFXLEVBQTNDLENBQTJDLENBQ2xFLENBQUM7WUFDRixFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ2xCLENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFoTFUsaUJBQWlCO1FBSDdCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQU84QixrQ0FBZSxFQUFnQixpQkFBVTtPQU41RCxpQkFBaUIsQ0FrTDdCO0lBQUQsd0JBQUM7Q0FBQSxBQWxMRCxJQWtMQztBQWxMWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBc3NldCwgRW50cnlDb2xsZWN0aW9uLCBFbnRyeSB9IGZyb20gXCJjb250ZW50ZnVsXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnByb2RcIjtcclxuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSBcIi4vc2V0dGluZ3Muc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgU3BlYWtlciB9IGZyb20gXCIuLi9tb2RlbHMvc3BlYWtlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBFdmVudEl0ZW0gfSBmcm9tIFwiLi4vbW9kZWxzL2V2ZW50LWl0ZW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgV29ya3Nob3AgfSBmcm9tIFwiLi4vbW9kZWxzL3dvcmtzaG9wLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBFdmVudENvbnRlbnRUeXBlcyB7XHJcbiAgU1BFQUtFUiA9IFwic3BlYWtlclwiLFxyXG4gIFdPUktTSE9QID0gXCJ3b3Jrc2hvcFwiLFxyXG4gIEVWRU5UX0lURU0gPSBcImV2ZW50SXRlbVwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEV2ZW50SXRlbVR5cGUge1xyXG4gIE5HUE9MQU5EID0gXCJuZ1BvbGFuZFwiLFxyXG4gIEpTUE9MQU5EID0gXCJqc1BvbGFuZFwiXHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGVudGZ1bFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgQ09OVEVOVEZVTF9VUkwgPSBcImh0dHBzOi8vY2RuLmNvbnRlbnRmdWwuY29tXCI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBDT05URU5URlVMX1VSTF9FTlRSSUVTID0gYCR7dGhpcy5DT05URU5URlVMX1VSTH0vc3BhY2VzLyR7XHJcbiAgICBlbnZpcm9ubWVudC5jb250ZW50ZnVsLnNwYWNlSWRcclxuICB9L2Vudmlyb25tZW50cy9tYXN0ZXIvZW50cmllcz9hY2Nlc3NfdG9rZW49JHtlbnZpcm9ubWVudC5jb250ZW50ZnVsLnRva2VufWA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBnZXRDb250ZW50ZnVsVXJsRW50cnkoZW50cnlJZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgaHR0cHM6Ly9jZG4uY29udGVudGZ1bC5jb20vc3BhY2VzLyR7XHJcbiAgICAgIGVudmlyb25tZW50LmNvbnRlbnRmdWwuc3BhY2VJZFxyXG4gICAgfS9lbnZpcm9ubWVudHMvbWFzdGVyL2VudHJpZXMvJHtlbnRyeUlkfT9hY2Nlc3NfdG9rZW49JHtcclxuICAgICAgZW52aXJvbm1lbnQuY29udGVudGZ1bC50b2tlblxyXG4gICAgfWA7XHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50ZnVsVXJsUGFyYW1ldGVycyhwYXJhbXM6IHt9KTogc3RyaW5nIHtcclxuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhwYXJhbXMpXHJcbiAgICAgIC5tYXAoKFtrZXksIHZhbF0pID0+IGAke2tleX09JHt2YWx9YClcclxuICAgICAgLmpvaW4oXCImXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RXZlbnRJdGVtcyhob3dNYW55OiBudW1iZXIsIHR5cGU6IEV2ZW50SXRlbVR5cGUpOiBPYnNlcnZhYmxlPEFycmF5PEV2ZW50SXRlbT4+IHtcclxuICAgIGNvbnN0IHF1ZXJ5ID0ge1xyXG4gICAgICBjb250ZW50X3R5cGU6IEV2ZW50Q29udGVudFR5cGVzLkVWRU5UX0lURU0sXHJcbiAgICAgIGxvY2FsZTogdGhpcy5zZXR0aW5ncy5nZXRMb2NhbGUoKSxcclxuICAgICAgJ2ZpZWxkcy50eXBlJzogdHlwZSxcclxuICAgICAgb3JkZXI6IFwiZmllbGRzLnN0YXJ0RGF0ZVwiLFxyXG4gICAgICBsaW1pdDogaG93TWFueVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQoXHJcbiAgICAgICAgYCR7dGhpcy5DT05URU5URlVMX1VSTF9FTlRSSUVTfSYke3RoaXMuZ2V0Q29udGVudGZ1bFVybFBhcmFtZXRlcnMoXHJcbiAgICAgICAgICBxdWVyeVxyXG4gICAgICAgICl9YCxcclxuICAgICAgICB7IHJlc3BvbnNlVHlwZTogXCJqc29uXCIgfVxyXG4gICAgICApXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCgoZW50cmllczogRW50cnlDb2xsZWN0aW9uPGFueT4pID0+IHtcclxuICAgICAgICAgIC8vY29uc3QgYXNzZXRzOiBBcnJheTxBc3NldD4gPSBlbnRyaWVzLmluY2x1ZGVzLkFzc2V0O1xyXG5cclxuICAgICAgICAgIHJldHVybiBlbnRyaWVzLml0ZW1zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgLy8gIGNvbnN0IHByb2ZpbGVQaG90bzogQXNzZXQgPSB0aGlzLmdldEFzc2V0QnlJZChhc3NldHMsIGl0ZW0uZmllbGRzLnBob3RvLnN5cy5pZCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV2ZW50SXRlbShcclxuICAgICAgICAgICAgICBpdGVtLmZpZWxkcy50aXRsZSxcclxuICAgICAgICAgICAgICBpdGVtLmZpZWxkcy50eXBlLFxyXG4gICAgICAgICAgICAgIGl0ZW0uZmllbGRzLnNob3J0RGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgaXRlbS5maWVsZHMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgaXRlbS5maWVsZHMuc3RhcnREYXRlLFxyXG4gICAgICAgICAgICAgIGl0ZW0uZmllbGRzLmVuZERhdGUsXHJcbiAgICAgICAgICAgICAgdW5kZWZpbmVkIC8vIFRPRE86IHphbWllbmnEhyBuYSBwb2JpZXJhbmllIFNwZWFrZXJhXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0V29ya3Nob3BzKGhvd01hbnk6IG51bWJlcik6IE9ic2VydmFibGU8QXJyYXk8V29ya3Nob3A+PiB7XHJcbiAgICBjb25zdCBxdWVyeSA9IHtcclxuICAgICAgY29udGVudF90eXBlOiBFdmVudENvbnRlbnRUeXBlcy5XT1JLU0hPUCxcclxuICAgICAgbG9jYWxlOiB0aGlzLnNldHRpbmdzLmdldExvY2FsZSgpLFxyXG4gICAgICBvcmRlcjogXCJzeXMuY3JlYXRlZEF0XCIsXHJcbiAgICAgIGxpbWl0OiBob3dNYW55XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldChcclxuICAgICAgICBgJHt0aGlzLkNPTlRFTlRGVUxfVVJMX0VOVFJJRVN9JiR7dGhpcy5nZXRDb250ZW50ZnVsVXJsUGFyYW1ldGVycyhcclxuICAgICAgICAgIHF1ZXJ5XHJcbiAgICAgICAgKX1gLFxyXG4gICAgICAgIHsgcmVzcG9uc2VUeXBlOiBcImpzb25cIiB9XHJcbiAgICAgIClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKChlbnRyaWVzOiBFbnRyeUNvbGxlY3Rpb248YW55PikgPT4ge1xyXG4gICAgICAgICAgLy9jb25zdCBhc3NldHM6IEFycmF5PEFzc2V0PiA9IGVudHJpZXMuaW5jbHVkZXMuQXNzZXQ7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGVudHJpZXMuaXRlbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAvLyAgY29uc3QgcHJvZmlsZVBob3RvOiBBc3NldCA9IHRoaXMuZ2V0QXNzZXRCeUlkKGFzc2V0cywgaXRlbS5maWVsZHMucGhvdG8uc3lzLmlkKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgV29ya3Nob3AoXHJcbiAgICAgICAgICAgICAgaXRlbS5maWVsZHMudGl0bGUsXHJcbiAgICAgICAgICAgICAgaXRlbS5maWVsZHMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgdW5kZWZpbmVkLCAvLyBUT0RPOiB6YW1pZW5pxIcgbmEgcG9iaWVyYW5pZSBTcGVha2VyYVxyXG4gICAgICAgICAgICAgIGl0ZW0uZmllbGRzLnN0YXJ0RGF0ZSxcclxuICAgICAgICAgICAgICBpdGVtLmZpZWxkcy5lbmREYXRlLFxyXG4gICAgICAgICAgICAgIDAsIC8vIFRPRE86IHphbWllbmnEhyBuYSB3c3DDs8WCcnrEmWRuZVxyXG4gICAgICAgICAgICAgIDAsIC8vIFRPRE86IHphbWllbmnEhyBuYSB3c3DDs8WCcnrEmWRuZVxyXG4gICAgICAgICAgICAgIGl0ZW0uZmllbGRzLmxvY2F0aW9uRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgaXRlbS5maWVsZHMucHJpY2VQbG4sXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3BlYWtlcnMoaG93TWFueTogbnVtYmVyKTogT2JzZXJ2YWJsZTxBcnJheTxTcGVha2VyPj4ge1xyXG4gICAgY29uc3QgcXVlcnkgPSB7XHJcbiAgICAgIGNvbnRlbnRfdHlwZTogRXZlbnRDb250ZW50VHlwZXMuU1BFQUtFUixcclxuICAgICAgbG9jYWxlOiB0aGlzLnNldHRpbmdzLmdldExvY2FsZSgpLFxyXG4gICAgICBvcmRlcjogXCJzeXMuY3JlYXRlZEF0XCIsXHJcbiAgICAgIGxpbWl0OiBob3dNYW55XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldChcclxuICAgICAgICBgJHt0aGlzLkNPTlRFTlRGVUxfVVJMX0VOVFJJRVN9JiR7dGhpcy5nZXRDb250ZW50ZnVsVXJsUGFyYW1ldGVycyhcclxuICAgICAgICAgIHF1ZXJ5XHJcbiAgICAgICAgKX1gLFxyXG4gICAgICAgIHsgcmVzcG9uc2VUeXBlOiBcImpzb25cIiB9XHJcbiAgICAgIClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKChlbnRyaWVzOiBFbnRyeUNvbGxlY3Rpb248YW55PikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYXNzZXRzOiBBcnJheTxBc3NldD4gPSBlbnRyaWVzLmluY2x1ZGVzLkFzc2V0O1xyXG5cclxuICAgICAgICAgIHJldHVybiBlbnRyaWVzLml0ZW1zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZmlsZVBob3RvOiBBc3NldCA9IHRoaXMuZ2V0QXNzZXRCeUlkKFxyXG4gICAgICAgICAgICAgIGFzc2V0cyxcclxuICAgICAgICAgICAgICBpdGVtLmZpZWxkcy5waG90by5zeXMuaWRcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3BlYWtlcihcclxuICAgICAgICAgICAgICBpdGVtLmZpZWxkcy5uYW1lLFxyXG4gICAgICAgICAgICAgIGl0ZW0uZmllbGRzLnJvbGUsXHJcbiAgICAgICAgICAgICAgaXRlbS5maWVsZHMuYmlvLFxyXG4gICAgICAgICAgICAgIHByb2ZpbGVQaG90byA/IHByb2ZpbGVQaG90by5maWVsZHMuZmlsZS51cmwgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgcHJvZmlsZVBob3RvID8gcHJvZmlsZVBob3RvLmZpZWxkcy50aXRsZSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICBwcm9maWxlUGhvdG8gPyBwcm9maWxlUGhvdG8uZmllbGRzLmRlc2NyaXB0aW9uIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgIGl0ZW0uZmllbGRzLmVtYWlsLFxyXG4gICAgICAgICAgICAgIGl0ZW0uZmllbGRzLnVybEdpdGh1YixcclxuICAgICAgICAgICAgICBpdGVtLmZpZWxkcy51cmxMaW5rZWRJbixcclxuICAgICAgICAgICAgICBpdGVtLmZpZWxkcy51cmxUd2l0dGVyLFxyXG4gICAgICAgICAgICAgIGl0ZW0uZmllbGRzLnVybFd3d1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QXNzZXRCeUlkKGFzc2V0QXJyYXk6IEFycmF5PEFzc2V0PiwgaWQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICBpZiAoYXNzZXRBcnJheSAmJiBhc3NldEFycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgbmV3QXJyYXkgPSBhc3NldEFycmF5LmZpbHRlcigoaXRlbTogQXNzZXQpID0+IGl0ZW0uc3lzLmlkID09PSBpZCk7XHJcbiAgICAgIGlmIChuZXdBcnJheSAmJiBuZXdBcnJheS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5WzBdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRFbnRyeUJ5SWQoZW50cmllc0FycmF5OiBFbnRyeTxhbnk+W10sIGlkOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgaWYgKGVudHJpZXNBcnJheSAmJiBlbnRyaWVzQXJyYXkubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBuZXdBcnJheSA9IGVudHJpZXNBcnJheS5maWx0ZXIoXHJcbiAgICAgICAgKGl0ZW06IEVudHJ5PGFueT4pID0+IGl0ZW0uc3lzLmlkID09PSBpZFxyXG4gICAgICApO1xyXG4gICAgICBpZiAobmV3QXJyYXkgJiYgbmV3QXJyYXkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJldHVybiBuZXdBcnJheVswXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRFbnRyaWVzQnlDb250ZW50VHlwZShcclxuICAgIGVudHJpZXNBcnJheTogRW50cnk8YW55PltdLFxyXG4gICAgY29udGVudFR5cGU6IEV2ZW50Q29udGVudFR5cGVzXHJcbiAgKTogYW55IHtcclxuICAgIGlmIChlbnRyaWVzQXJyYXkgJiYgZW50cmllc0FycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgbmV3QXJyYXkgPSBlbnRyaWVzQXJyYXkuZmlsdGVyKFxyXG4gICAgICAgIChpdGVtOiBFbnRyeTxhbnk+KSA9PiBpdGVtLnN5cy5jb250ZW50VHlwZS5zeXMuaWQgPT09IGNvbnRlbnRUeXBlXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChuZXdBcnJheSAmJiBuZXdBcnJheS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=