"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var event_item_model_1 = require("~/app/models/event-item.model");
var EventItemComponent = /** @class */ (function () {
    function EventItemComponent() {
        // Use the component constructor to inject providers.
    }
    EventItemComponent.prototype.ngOnInit = function () { };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJldmVudC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxrRUFBMEQ7QUFRMUQ7SUFJRTtRQUNFLHFEQUFxRDtJQUN2RCxDQUFDO0lBRUQscUNBQVEsR0FBUixjQUFrQixDQUFDO0lBTm5CO1FBREMsWUFBSyxFQUFFO2tDQUNHLDRCQUFTO3lEQUFDO0lBRlYsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDOztPQUNXLGtCQUFrQixDQVM5QjtJQUFELHlCQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRXZlbnRJdGVtIH0gZnJvbSBcIn4vYXBwL21vZGVscy9ldmVudC1pdGVtLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJFdmVudEl0ZW1cIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vZXZlbnQtaXRlbS5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9ldmVudC1pdGVtLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEV2ZW50SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICBldmVudEl0ZW06IEV2ZW50SXRlbTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==