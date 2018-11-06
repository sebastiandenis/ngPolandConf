"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var event_item_model_1 = require("~/app/models/event-item.model");
var speaker_details_component_1 = require("~/app/shared/components/speaker-details/speaker-details.component");
var EventItemComponent = /** @class */ (function () {
    function EventItemComponent(modalService, viewContainerRef) {
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
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
    EventItemComponent.prototype.showModal = function () {
        this.openModal();
    };
    EventItemComponent.prototype.openModal = function () {
        var options = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: true,
            animated: true,
            context: {
                speaker: this.eventItem.presenter
            }
        };
        this.modalService.showModal(speaker_details_component_1.SpeakerDetailsComponent, options);
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
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], EventItemComponent);
    return EventItemComponent;
}());
exports.EventItemComponent = EventItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJldmVudC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRTtBQUNuRSxrRUFBNEY7QUFDNUYsa0VBQTBEO0FBQzFELCtHQUE0RztBQVM1RztJQUlFLDRCQUNVLFlBQWdDLEVBQ2hDLGdCQUFrQztRQURsQyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUUxQyxxREFBcUQ7SUFDdkQsQ0FBQztJQUVELGtDQUFLLEdBQUw7UUFDRSxJQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3ZCLDhCQUE4QjtRQUU5QixJQUFNLFVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELElBQU0sUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbEQsRUFBRSxDQUFDLENBQUMsVUFBVSxJQUFJLEdBQUcsSUFBSSxRQUFRLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN6QyxnQ0FBZ0M7WUFFaEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO0lBQ0gsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVPLHNDQUFTLEdBQWpCO1FBQ0UsSUFBTSxPQUFPLEdBQXVCO1lBQ2xDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUzthQUNsQztTQUNGLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxtREFBdUIsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBdkNEO1FBREMsWUFBSyxFQUFFO2tDQUNHLDRCQUFTO3lEQUFDO0lBRlYsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDO3lDQU13QixpQ0FBa0I7WUFDZCx1QkFBZ0I7T0FOakMsa0JBQWtCLENBMEM5QjtJQUFELHlCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7QUExQ1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nT3B0aW9ucywgTW9kYWxEaWFsb2dTZXJ2aWNlICB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuaW1wb3J0IHsgRXZlbnRJdGVtIH0gZnJvbSBcIn4vYXBwL21vZGVscy9ldmVudC1pdGVtLm1vZGVsXCI7XHJcbmltcG9ydCB7IFNwZWFrZXJEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIn4vYXBwL3NoYXJlZC9jb21wb25lbnRzL3NwZWFrZXItZGV0YWlscy9zcGVha2VyLWRldGFpbHMuY29tcG9uZW50XCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiRXZlbnRJdGVtXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL2V2ZW50LWl0ZW0uY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vZXZlbnQtaXRlbS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFdmVudEl0ZW1Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpXHJcbiAgZXZlbnRJdGVtOiBFdmVudEl0ZW07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZlxyXG4gICkge1xyXG4gICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICB9XHJcblxyXG4gIGlzTm93KCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiTm93OiBcIiArIG5vdyk7XHJcblxyXG4gICAgY29uc3QgZXZlbnRTdGFydCA9IG5ldyBEYXRlKHRoaXMuZXZlbnRJdGVtLnN0YXJ0RGF0ZSk7XHJcbiAgICBjb25zdCBldmVudEVuZCA9IG5ldyBEYXRlKHRoaXMuZXZlbnRJdGVtLmVuZERhdGUpO1xyXG5cclxuICAgIGlmIChldmVudFN0YXJ0IDw9IG5vdyAmJiBldmVudEVuZCA+PSBub3cpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJ0YWsgdG8gdGVyYXohXCIpO1xyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93TW9kYWwoKSB7XHJcbiAgICB0aGlzLm9wZW5Nb2RhbCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcGVuTW9kYWwoKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XHJcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmlld0NvbnRhaW5lclJlZixcclxuICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgICAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgIGNvbnRleHQ6IHtcclxuICAgICAgICBzcGVha2VyOiB0aGlzLmV2ZW50SXRlbS5wcmVzZW50ZXJcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChTcGVha2VyRGV0YWlsc0NvbXBvbmVudCwgb3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==