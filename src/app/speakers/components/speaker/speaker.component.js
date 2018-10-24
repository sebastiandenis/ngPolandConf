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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYWtlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVha2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSxrRUFHMkM7QUFDM0MsNERBQXFEO0FBQ3JELDBGQUF1RjtBQVF2RjtJQUlFLDBCQUNVLFlBQWdDLEVBQ2hDLGdCQUFrQztRQURsQyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUUxQyxxREFBcUQ7SUFDdkQsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDRSx1Q0FBdUM7SUFDekMsQ0FBQztJQUVELG9DQUFTLEdBQVQsVUFBVSxFQUFPO1FBQWpCLGlCQUlDO1FBSEMsRUFBRSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbEIsRUFBRSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7UUFDN0IsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxFQUFFLEVBQWhCLENBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVPLG9DQUFTLEdBQWpCO1FBQ0UsSUFBTSxPQUFPLEdBQXVCO1lBQ2xDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2FBQ3RCO1NBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLG1EQUF1QixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUE3QkQ7UUFEQyxZQUFLLEVBQUU7a0NBQ0MsdUJBQU87cURBQUM7SUFGTixnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3ZDLENBQUM7eUNBTXdCLGlDQUFrQjtZQUNkLHVCQUFnQjtPQU5qQyxnQkFBZ0IsQ0FnQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgTW9kYWxEaWFsb2dPcHRpb25zLFxuICBNb2RhbERpYWxvZ1NlcnZpY2Vcbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgU3BlYWtlciB9IGZyb20gXCJ+L2FwcC9tb2RlbHMvc3BlYWtlci5tb2RlbFwiO1xuaW1wb3J0IHsgU3BlYWtlckRldGFpbHNDb21wb25lbnQgfSBmcm9tIFwiLi4vc3BlYWtlci1kZXRhaWxzL3NwZWFrZXItZGV0YWlscy5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIlNwZWFrZXJcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9zcGVha2VyLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9zcGVha2VyLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgU3BlYWtlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHNwZWFrZXI6IFNwZWFrZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7XG4gICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICB9XG5cbiAgc2hvd01vZGFsKHNsOiBhbnkpIHtcbiAgICBzbC5jbGFzc05hbWUgPSBcIlwiO1xuICAgIHNsLmNsYXNzTmFtZSA9IFwiaGlnaGxpZ2h0ZWRcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub3Blbk1vZGFsKCksIDMwMCk7XG4gIH1cblxuICBwcml2YXRlIG9wZW5Nb2RhbCgpOiB2b2lkIHtcbiAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZpZXdDb250YWluZXJSZWYsXG4gICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICBjb250ZXh0OiB7XG4gICAgICAgIHNwZWFrZXI6IHRoaXMuc3BlYWtlclxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKFNwZWFrZXJEZXRhaWxzQ29tcG9uZW50LCBvcHRpb25zKTtcbiAgfVxufVxuIl19