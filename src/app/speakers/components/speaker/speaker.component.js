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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYWtlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVha2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSxrRUFHMkM7QUFDM0MsNERBQXFEO0FBQ3JELDBGQUF1RjtBQVF2RjtJQUlFLDBCQUNVLFlBQWdDLEVBQ2hDLGdCQUFrQztRQURsQyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUUxQyxxREFBcUQ7SUFDdkQsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDRSx1Q0FBdUM7SUFDekMsQ0FBQztJQUVELG9DQUFTLEdBQVQsVUFBVSxFQUFPO1FBQWpCLGlCQUlDO1FBSEMsRUFBRSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbEIsRUFBRSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7UUFDN0IsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxFQUFFLEVBQWhCLENBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVPLG9DQUFTLEdBQWpCO1FBQ0UsSUFBTSxPQUFPLEdBQXVCO1lBQ2xDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2FBQ3RCO1NBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLG1EQUF1QixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUE3QkQ7UUFEQyxZQUFLLEVBQUU7a0NBQ0MsdUJBQU87cURBQUM7SUFGTixnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3ZDLENBQUM7eUNBTXdCLGlDQUFrQjtZQUNkLHVCQUFnQjtPQU5qQyxnQkFBZ0IsQ0FnQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIE1vZGFsRGlhbG9nT3B0aW9ucyxcclxuICBNb2RhbERpYWxvZ1NlcnZpY2VcclxufSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcbmltcG9ydCB7IFNwZWFrZXIgfSBmcm9tIFwifi9hcHAvbW9kZWxzL3NwZWFrZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgU3BlYWtlckRldGFpbHNDb21wb25lbnQgfSBmcm9tIFwiLi4vc3BlYWtlci1kZXRhaWxzL3NwZWFrZXItZGV0YWlscy5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIlNwZWFrZXJcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vc3BlYWtlci5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9zcGVha2VyLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNwZWFrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgc3BlYWtlcjogU3BlYWtlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmXHJcbiAgKSB7XHJcbiAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICB9XHJcblxyXG4gIHNob3dNb2RhbChzbDogYW55KSB7XHJcbiAgICBzbC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgc2wuY2xhc3NOYW1lID0gXCJoaWdobGlnaHRlZFwiO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9wZW5Nb2RhbCgpLCAzMDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcGVuTW9kYWwoKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XHJcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmlld0NvbnRhaW5lclJlZixcclxuICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgICAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgIGNvbnRleHQ6IHtcclxuICAgICAgICBzcGVha2VyOiB0aGlzLnNwZWFrZXJcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChTcGVha2VyRGV0YWlsc0NvbXBvbmVudCwgb3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==