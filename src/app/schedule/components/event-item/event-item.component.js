"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var event_item_model_1 = require("~/app/models/event-item.model");
var EventItemComponent = /** @class */ (function () {
    function EventItemComponent() {
        // Use the component constructor to inject providers.
    }
    EventItemComponent.prototype.isNow = function () {
        var now = new Date();
        // console.log("Now: " + now);
        var eventStart = new Date(this.eventItem.startDate);
        var eventEnd = new Date(this.eventItem.endDate);
        if (eventStart <= now && eventEnd >= now) {
            // console.log("tak to teraz!");
            return true;
        }
        else {
            return false;
        }
    };
    EventItemComponent.prototype.resolveIcon = function (icon) {
        switch (icon.toLowerCase()) {
            case "presentation":
                return String.fromCharCode(event_item_model_1.EventItemIcon.PRESENTATION);
            case "break":
                return String.fromCharCode(event_item_model_1.EventItemIcon.BREAK);
            case "eating":
                return String.fromCharCode(event_item_model_1.EventItemIcon.EATING);
            case "qa":
                return String.fromCharCode(event_item_model_1.EventItemIcon.QA);
            case "registration":
                return String.fromCharCode(event_item_model_1.EventItemIcon.REGISTRATION);
            case "party":
                return String.fromCharCode(event_item_model_1.EventItemIcon.PARTY);
            default:
                return "";
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", event_item_model_1.EventItem)
    ], EventItemComponent.prototype, "eventItem", void 0);
    EventItemComponent = __decorate([
        core_1.Component({
            selector: "EventItem",
            moduleId: module.id,
            templateUrl: "./event-item.component.html",
            styleUrls: ["./event-item.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], EventItemComponent);
    return EventItemComponent;
}());
exports.EventItemComponent = EventItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJldmVudC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxrRUFBeUU7QUFRekU7SUFJRTtRQUNFLHFEQUFxRDtJQUN2RCxDQUFDO0lBRUQsa0NBQUssR0FBTDtRQUNFLElBQU0sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdkIsOEJBQThCO1FBRTlCLElBQU0sVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEQsSUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVsRCxFQUFFLENBQUMsQ0FBQyxVQUFVLElBQUksR0FBRyxJQUFJLFFBQVEsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLGdDQUFnQztZQUVoQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBRUQsd0NBQVcsR0FBWCxVQUFZLElBQVk7UUFDdEIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzQixLQUFLLGNBQWM7Z0JBQ2pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGdDQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDekQsS0FBSyxPQUFPO2dCQUNWLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGdDQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEQsS0FBSyxRQUFRO2dCQUNYLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGdDQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsS0FBSyxJQUFJO2dCQUNQLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGdDQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDL0MsS0FBSyxjQUFjO2dCQUNqQixNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxnQ0FBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3pELEtBQUssT0FBTztnQkFDVixNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxnQ0FBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xEO2dCQUNFLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQXZDRDtRQURDLFlBQUssRUFBRTtrQ0FDRyw0QkFBUzt5REFBQztJQUZWLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQzs7T0FDVyxrQkFBa0IsQ0EwQzlCO0lBQUQseUJBQUM7Q0FBQSxBQTFDRCxJQTBDQztBQTFDWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBFdmVudEl0ZW0sIEV2ZW50SXRlbUljb24gfSBmcm9tIFwifi9hcHAvbW9kZWxzL2V2ZW50LWl0ZW0ubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIkV2ZW50SXRlbVwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9ldmVudC1pdGVtLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2V2ZW50LWl0ZW0uY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXZlbnRJdGVtQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIGV2ZW50SXRlbTogRXZlbnRJdGVtO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgfVxyXG5cclxuICBpc05vdygpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIk5vdzogXCIgKyBub3cpO1xyXG5cclxuICAgIGNvbnN0IGV2ZW50U3RhcnQgPSBuZXcgRGF0ZSh0aGlzLmV2ZW50SXRlbS5zdGFydERhdGUpO1xyXG4gICAgY29uc3QgZXZlbnRFbmQgPSBuZXcgRGF0ZSh0aGlzLmV2ZW50SXRlbS5lbmREYXRlKTtcclxuXHJcbiAgICBpZiAoZXZlbnRTdGFydCA8PSBub3cgJiYgZXZlbnRFbmQgPj0gbm93KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidGFrIHRvIHRlcmF6IVwiKTtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzb2x2ZUljb24oaWNvbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAoaWNvbi50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgIGNhc2UgXCJwcmVzZW50YXRpb25cIjpcclxuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShFdmVudEl0ZW1JY29uLlBSRVNFTlRBVElPTik7XHJcbiAgICAgIGNhc2UgXCJicmVha1wiOlxyXG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKEV2ZW50SXRlbUljb24uQlJFQUspO1xyXG4gICAgICBjYXNlIFwiZWF0aW5nXCI6XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoRXZlbnRJdGVtSWNvbi5FQVRJTkcpO1xyXG4gICAgICBjYXNlIFwicWFcIjpcclxuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShFdmVudEl0ZW1JY29uLlFBKTtcclxuICAgICAgY2FzZSBcInJlZ2lzdHJhdGlvblwiOlxyXG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKEV2ZW50SXRlbUljb24uUkVHSVNUUkFUSU9OKTtcclxuICAgICAgY2FzZSBcInBhcnR5XCI6XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoRXZlbnRJdGVtSWNvbi5QQVJUWSk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==