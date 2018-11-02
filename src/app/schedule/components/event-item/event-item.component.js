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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJldmVudC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRDtBQUNqRCxrRUFBMEQ7QUFRMUQ7SUFJRTtRQUNFLHFEQUFxRDtJQUN2RCxDQUFDO0lBRUQsa0NBQUssR0FBTDtRQUNFLElBQU0sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdkIsOEJBQThCO1FBRTlCLElBQU0sVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEQsSUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVsRCxFQUFFLENBQUMsQ0FBQyxVQUFVLElBQUksR0FBRyxJQUFJLFFBQVEsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLGdDQUFnQztZQUVoQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBcEJEO1FBREMsWUFBSyxFQUFFO2tDQUNHLDRCQUFTO3lEQUFDO0lBRlYsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDOztPQUNXLGtCQUFrQixDQXVCOUI7SUFBRCx5QkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBFdmVudEl0ZW0gfSBmcm9tIFwifi9hcHAvbW9kZWxzL2V2ZW50LWl0ZW0ubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIkV2ZW50SXRlbVwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9ldmVudC1pdGVtLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2V2ZW50LWl0ZW0uY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXZlbnRJdGVtQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIGV2ZW50SXRlbTogRXZlbnRJdGVtO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgfVxyXG5cclxuICBpc05vdygpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIk5vdzogXCIgKyBub3cpO1xyXG5cclxuICAgIGNvbnN0IGV2ZW50U3RhcnQgPSBuZXcgRGF0ZSh0aGlzLmV2ZW50SXRlbS5zdGFydERhdGUpO1xyXG4gICAgY29uc3QgZXZlbnRFbmQgPSBuZXcgRGF0ZSh0aGlzLmV2ZW50SXRlbS5lbmREYXRlKTtcclxuXHJcbiAgICBpZiAoZXZlbnRTdGFydCA8PSBub3cgJiYgZXZlbnRFbmQgPj0gbm93KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidGFrIHRvIHRlcmF6IVwiKTtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=