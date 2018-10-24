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
            console.log("tak to teraz!");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJldmVudC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxrRUFBMEQ7QUFRMUQ7SUFJRTtRQUNFLHFEQUFxRDtJQUN2RCxDQUFDO0lBRUQsa0NBQUssR0FBTDtRQUNFLElBQU0sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdkIsOEJBQThCO1FBRTlCLElBQU0sVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEQsSUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVsRCxFQUFFLENBQUMsQ0FBQyxVQUFVLElBQUksR0FBRyxJQUFJLFFBQVEsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFN0IsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO0lBQ0gsQ0FBQztJQXBCRDtRQURDLFlBQUssRUFBRTtrQ0FDRyw0QkFBUzt5REFBQztJQUZWLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQzs7T0FDVyxrQkFBa0IsQ0F3QjlCO0lBQUQseUJBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRXZlbnRJdGVtIH0gZnJvbSBcIn4vYXBwL21vZGVscy9ldmVudC1pdGVtLm1vZGVsXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJFdmVudEl0ZW1cIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9ldmVudC1pdGVtLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9ldmVudC1pdGVtLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgRXZlbnRJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgZXZlbnRJdGVtOiBFdmVudEl0ZW07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgfVxuXG4gIGlzTm93KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJOb3c6IFwiICsgbm93KTtcblxuICAgIGNvbnN0IGV2ZW50U3RhcnQgPSBuZXcgRGF0ZSh0aGlzLmV2ZW50SXRlbS5zdGFydERhdGUpO1xuICAgIGNvbnN0IGV2ZW50RW5kID0gbmV3IERhdGUodGhpcy5ldmVudEl0ZW0uZW5kRGF0ZSk7XG5cbiAgICBpZiAoZXZlbnRTdGFydCA8PSBub3cgJiYgZXZlbnRFbmQgPj0gbm93KSB7XG4gICAgICBjb25zb2xlLmxvZyhcInRhayB0byB0ZXJheiFcIik7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==