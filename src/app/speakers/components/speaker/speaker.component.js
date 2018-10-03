"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var speaker_model_1 = require("~/app/models/speaker.model");
var SpeakerComponent = /** @class */ (function () {
    function SpeakerComponent() {
        // Use the component constructor to inject providers.
    }
    SpeakerComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
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
        __metadata("design:paramtypes", [])
    ], SpeakerComponent);
    return SpeakerComponent;
}());
exports.SpeakerComponent = SpeakerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYWtlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVha2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUV6RCw0REFBcUQ7QUFRckQ7SUFLSTtRQUNJLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBUkQ7UUFEQyxZQUFLLEVBQUU7a0NBQ0MsdUJBQU87cURBQUM7SUFIUixnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3pDLENBQUM7O09BQ1csZ0JBQWdCLENBYTVCO0lBQUQsdUJBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFNwZWFrZXIgfSBmcm9tIFwifi9hcHAvbW9kZWxzL3NwZWFrZXIubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiU3BlYWtlclwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc3BlYWtlci5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3NwZWFrZXIuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3BlYWtlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNwZWFrZXI6IFNwZWFrZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgIH1cclxuXHJcbn1cclxuIl19