"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var workshop_model_1 = require("~/app/models/workshop.model");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var speaker_details_component_1 = require("~/app/shared/components/speaker-details/speaker-details.component");
var WorkshopComponent = /** @class */ (function () {
    function WorkshopComponent(modalService, viewContainerRef) {
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        // Use the component constructor to inject providers.
    }
    WorkshopComponent.prototype.ngOnInit = function () {
        // ngInit here
    };
    WorkshopComponent.prototype.showModal = function () {
        this.openModal();
    };
    WorkshopComponent.prototype.openModal = function () {
        var options = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: true,
            animated: true,
            context: {
                speaker: this.workshop.instructor
            }
        };
        this.modalService.showModal(speaker_details_component_1.SpeakerDetailsComponent, options);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", workshop_model_1.Workshop)
    ], WorkshopComponent.prototype, "workshop", void 0);
    WorkshopComponent = __decorate([
        core_1.Component({
            selector: "Workshop",
            moduleId: module.id,
            templateUrl: "./workshop.component.html",
            styleUrls: ["./workshop.component.css"]
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], WorkshopComponent);
    return WorkshopComponent;
}());
exports.WorkshopComponent = WorkshopComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3Nob3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29ya3Nob3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJFO0FBQzNFLDhEQUF1RDtBQUN2RCxrRUFBMkY7QUFDM0YsK0dBQTRHO0FBUTVHO0lBSUUsMkJBQ1UsWUFBZ0MsRUFDaEMsZ0JBQWtDO1FBRGxDLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRTFDLHFEQUFxRDtJQUN2RCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNFLGNBQWM7SUFDaEIsQ0FBQztJQUVELHFDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVPLHFDQUFTLEdBQWpCO1FBQ0UsSUFBTSxPQUFPLEdBQXVCO1lBQ2xDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVTthQUNsQztTQUNGLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxtREFBdUIsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBM0JEO1FBREMsWUFBSyxFQUFFO2tDQUNFLHlCQUFRO3VEQUFDO0lBRlIsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN4QyxDQUFDO3lDQU13QixpQ0FBa0I7WUFDZCx1QkFBZ0I7T0FOakMsaUJBQWlCLENBOEI3QjtJQUFELHdCQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUE5QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgV29ya3Nob3AgfSBmcm9tIFwifi9hcHAvbW9kZWxzL3dvcmtzaG9wLm1vZGVsXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nT3B0aW9ucywgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBTcGVha2VyRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gXCJ+L2FwcC9zaGFyZWQvY29tcG9uZW50cy9zcGVha2VyLWRldGFpbHMvc3BlYWtlci1kZXRhaWxzLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiV29ya3Nob3BcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vd29ya3Nob3AuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vd29ya3Nob3AuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV29ya3Nob3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgd29ya3Nob3A6IFdvcmtzaG9wO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWZcclxuICApIHtcclxuICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIG5nSW5pdCBoZXJlXHJcbiAgfVxyXG5cclxuICBzaG93TW9kYWwoKSB7XHJcbiAgICB0aGlzLm9wZW5Nb2RhbCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcGVuTW9kYWwoKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XHJcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmlld0NvbnRhaW5lclJlZixcclxuICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgICAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgIGNvbnRleHQ6IHtcclxuICAgICAgICBzcGVha2VyOiB0aGlzLndvcmtzaG9wLmluc3RydWN0b3JcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChTcGVha2VyRGV0YWlsc0NvbXBvbmVudCwgb3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==