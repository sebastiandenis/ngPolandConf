"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var speaker_model_1 = require("~/app/models/speaker.model");
var speaker_details_component_1 = require("../speaker-details/speaker-details.component");
var SpeakerComponent = /** @class */ (function () {
    function SpeakerComponent(modalService, viewContainerRef) {
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        // Use the component constructor to inject providers.
    }
    SpeakerComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    SpeakerComponent.prototype.showModal = function () {
        var options = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: true,
            animated: true,
            context: {
                speaker: this.speaker
            }
        };
        this.modalService.showModal(speaker_details_component_1.SpeakerDetailsComponent, options);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", speaker_model_1.Speaker)
    ], SpeakerComponent.prototype, "speaker", void 0);
    SpeakerComponent = __decorate([
        core_1.Component({
            selector: "Speaker",
            moduleId: module.id,
            templateUrl: "./speaker.component.html",
            styleUrls: ["./speaker.component.css"]
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], SpeakerComponent);
    return SpeakerComponent;
}());
exports.SpeakerComponent = SpeakerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYWtlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVha2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSxrRUFHMkM7QUFDM0MsNERBQXFEO0FBQ3JELDBGQUF1RjtBQVF2RjtJQUlFLDBCQUNVLFlBQWdDLEVBQ2hDLGdCQUFrQztRQURsQyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUUxQyxxREFBcUQ7SUFDdkQsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDRSx1Q0FBdUM7SUFDekMsQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFDRSxJQUFNLE9BQU8sR0FBdUI7WUFDbEMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxVQUFVLEVBQUUsSUFBSTtZQUNoQixRQUFRLEVBQUUsSUFBSTtZQUNkLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDdEI7U0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsbURBQXVCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQXZCRDtRQURDLFlBQUssRUFBRTtrQ0FDQyx1QkFBTztxREFBQztJQUZOLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdkMsQ0FBQzt5Q0FNd0IsaUNBQWtCO1lBQ2QsdUJBQWdCO09BTmpDLGdCQUFnQixDQTBCNUI7SUFBRCx1QkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgTW9kYWxEaWFsb2dPcHRpb25zLFxyXG4gIE1vZGFsRGlhbG9nU2VydmljZVxyXG59IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuaW1wb3J0IHsgU3BlYWtlciB9IGZyb20gXCJ+L2FwcC9tb2RlbHMvc3BlYWtlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBTcGVha2VyRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gXCIuLi9zcGVha2VyLWRldGFpbHMvc3BlYWtlci1kZXRhaWxzLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiU3BlYWtlclwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9zcGVha2VyLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL3NwZWFrZXIuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3BlYWtlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICBzcGVha2VyOiBTcGVha2VyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWZcclxuICApIHtcclxuICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gIH1cclxuXHJcbiAgc2hvd01vZGFsKCkge1xyXG4gICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICBjb250ZXh0OiB7XHJcbiAgICAgICAgc3BlYWtlcjogdGhpcy5zcGVha2VyXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoU3BlYWtlckRldGFpbHNDb21wb25lbnQsIG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG4iXX0=