"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var speaker_model_1 = require("~/app/models/speaker.model");
var speaker_details_component_1 = require("~/app/shared/components/speaker-details/speaker-details.component");
var SpeakerComponent = /** @class */ (function () {
    function SpeakerComponent(modalService, viewContainerRef) {
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        // Use the component constructor to inject providers.
    }
    SpeakerComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    SpeakerComponent.prototype.showModal = function (sl) {
        var _this = this;
        sl.className = "";
        sl.className = "highlighted";
        setTimeout(function () { return _this.openModal(); }, 300);
    };
    SpeakerComponent.prototype.openModal = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYWtlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVha2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSxrRUFHMkM7QUFDM0MsNERBQXFEO0FBQ3JELCtHQUE0RztBQVM1RztJQUlFLDBCQUNVLFlBQWdDLEVBQ2hDLGdCQUFrQztRQURsQyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUUxQyxxREFBcUQ7SUFDdkQsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDRSx1Q0FBdUM7SUFDekMsQ0FBQztJQUVELG9DQUFTLEdBQVQsVUFBVSxFQUFPO1FBQWpCLGlCQUlDO1FBSEMsRUFBRSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbEIsRUFBRSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7UUFDN0IsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxFQUFFLEVBQWhCLENBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVPLG9DQUFTLEdBQWpCO1FBQ0UsSUFBTSxPQUFPLEdBQXVCO1lBQ2xDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2FBQ3RCO1NBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLG1EQUF1QixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUE3QkQ7UUFEQyxZQUFLLEVBQUU7a0NBQ0MsdUJBQU87cURBQUM7SUFGTixnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3ZDLENBQUM7eUNBTXdCLGlDQUFrQjtZQUNkLHVCQUFnQjtPQU5qQyxnQkFBZ0IsQ0FnQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIE1vZGFsRGlhbG9nT3B0aW9ucyxcclxuICBNb2RhbERpYWxvZ1NlcnZpY2VcclxufSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcbmltcG9ydCB7IFNwZWFrZXIgfSBmcm9tIFwifi9hcHAvbW9kZWxzL3NwZWFrZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgU3BlYWtlckRldGFpbHNDb21wb25lbnQgfSBmcm9tIFwifi9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3BlYWtlci1kZXRhaWxzL3NwZWFrZXItZGV0YWlscy5jb21wb25lbnRcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJTcGVha2VyXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL3NwZWFrZXIuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vc3BlYWtlci5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcGVha2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIHNwZWFrZXI6IFNwZWFrZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZlxyXG4gICkge1xyXG4gICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgfVxyXG5cclxuICBzaG93TW9kYWwoc2w6IGFueSkge1xyXG4gICAgc2wuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgIHNsLmNsYXNzTmFtZSA9IFwiaGlnaGxpZ2h0ZWRcIjtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vcGVuTW9kYWwoKSwgMzAwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3Blbk1vZGFsKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICBjb250ZXh0OiB7XHJcbiAgICAgICAgc3BlYWtlcjogdGhpcy5zcGVha2VyXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoU3BlYWtlckRldGFpbHNDb21wb25lbnQsIG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG4iXX0=