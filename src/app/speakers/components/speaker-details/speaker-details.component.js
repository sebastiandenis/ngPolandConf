"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var utils = require("tns-core-modules/utils/utils");
var SpeakerDetailsComponent = /** @class */ (function () {
    function SpeakerDetailsComponent(params) {
        this.params = params;
        // Use the component constructor to inject providers.
    }
    SpeakerDetailsComponent.prototype.ngOnInit = function () {
        if (this.params.context.speaker) {
            this.speaker = this.params.context.speaker;
        }
    };
    SpeakerDetailsComponent.prototype.close = function () {
        this.params.closeCallback();
    };
    SpeakerDetailsComponent.prototype.openUrlLink = function (url) {
        utils.openUrl(url);
    };
    SpeakerDetailsComponent = __decorate([
        core_1.Component({
            selector: "SpeakerDetails",
            moduleId: module.id,
            templateUrl: "./speaker-details.component.html",
            styleUrls: ["./speaker-details.component.css"]
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
    ], SpeakerDetailsComponent);
    return SpeakerDetailsComponent;
}());
exports.SpeakerDetailsComponent = SpeakerDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYWtlci1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWFrZXItZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsa0VBQXNFO0FBRXRFLG9EQUFzRDtBQVF0RDtJQUdFLGlDQUFvQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUMzQyxxREFBcUQ7SUFDdkQsQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFFRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQzdDLENBQUM7SUFDSCxDQUFDO0lBRUQsdUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELDZDQUFXLEdBQVgsVUFBWSxHQUFXO1FBQ3JCLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQXBCVSx1QkFBdUI7UUFObkMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDL0MsQ0FBQzt5Q0FJNEIsZ0NBQWlCO09BSGxDLHVCQUF1QixDQXFCbkM7SUFBRCw4QkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcbmltcG9ydCB7IFNwZWFrZXIgfSBmcm9tIFwifi9hcHAvbW9kZWxzL3NwZWFrZXIubW9kZWxcIjtcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIlNwZWFrZXJEZXRhaWxzXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL3NwZWFrZXItZGV0YWlscy5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9zcGVha2VyLWRldGFpbHMuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3BlYWtlckRldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHNwZWFrZXI6IFNwZWFrZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge1xyXG4gICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIGlmICh0aGlzLnBhcmFtcy5jb250ZXh0LnNwZWFrZXIpIHtcclxuICAgICAgdGhpcy5zcGVha2VyID0gdGhpcy5wYXJhbXMuY29udGV4dC5zcGVha2VyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XHJcbiAgfVxyXG5cclxuICBvcGVuVXJsTGluayh1cmw6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdXRpbHMub3BlblVybCh1cmwpO1xyXG4gIH1cclxufVxyXG4iXX0=