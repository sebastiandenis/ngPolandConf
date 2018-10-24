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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYWtlci1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWFrZXItZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsa0VBQXNFO0FBRXRFLG9EQUFzRDtBQVF0RDtJQUdFLGlDQUFvQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUMzQyxxREFBcUQ7SUFDdkQsQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFFRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQzdDLENBQUM7SUFDSCxDQUFDO0lBRUQsdUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELDZDQUFXLEdBQVgsVUFBWSxHQUFXO1FBQ3JCLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQXBCVSx1QkFBdUI7UUFObkMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDL0MsQ0FBQzt5Q0FJNEIsZ0NBQWlCO09BSGxDLHVCQUF1QixDQXFCbkM7SUFBRCw4QkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgU3BlYWtlciB9IGZyb20gXCJ+L2FwcC9tb2RlbHMvc3BlYWtlci5tb2RlbFwiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIlNwZWFrZXJEZXRhaWxzXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vc3BlYWtlci1kZXRhaWxzLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9zcGVha2VyLWRldGFpbHMuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBTcGVha2VyRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHNwZWFrZXI6IFNwZWFrZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7XG4gICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgaWYgKHRoaXMucGFyYW1zLmNvbnRleHQuc3BlYWtlcikge1xuICAgICAgdGhpcy5zcGVha2VyID0gdGhpcy5wYXJhbXMuY29udGV4dC5zcGVha2VyO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcbiAgfVxuXG4gIG9wZW5VcmxMaW5rKHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgdXRpbHMub3BlblVybCh1cmwpO1xuICB9XG59XG4iXX0=