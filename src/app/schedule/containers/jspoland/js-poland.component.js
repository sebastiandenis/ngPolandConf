"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contentful_service_1 = require("~/app/services/contentful.service");
var JsPolandComponent = /** @class */ (function () {
    function JsPolandComponent(contentful) {
        this.contentful = contentful;
        // Use the component constructor to inject providers.
    }
    JsPolandComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.events$ = this.contentful.getEventItems(100, contentful_service_1.EventItemType.JSPOLAND);
    };
    JsPolandComponent = __decorate([
        core_1.Component({
            selector: "JsPoland",
            moduleId: module.id,
            templateUrl: "./js-poland.component.html",
            styleUrls: ["./js-poland.component.css"]
        }),
        __metadata("design:paramtypes", [contentful_service_1.ContentfulService])
    ], JsPolandComponent);
    return JsPolandComponent;
}());
exports.JsPolandComponent = JsPolandComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMtcG9sYW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImpzLXBvbGFuZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFHbEQsd0VBQXFGO0FBUXJGO0lBSUksMkJBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQy9DLHFEQUFxRDtJQUN2RCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNFLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxrQ0FBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFYUSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQzNDLENBQUM7eUNBS2tDLHNDQUFpQjtPQUp4QyxpQkFBaUIsQ0FZN0I7SUFBRCx3QkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgRXZlbnRJdGVtIH0gZnJvbSBcIn4vYXBwL21vZGVscy9ldmVudC1pdGVtLm1vZGVsXCI7XG5pbXBvcnQgeyBDb250ZW50ZnVsU2VydmljZSwgRXZlbnRJdGVtVHlwZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9jb250ZW50ZnVsLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSnNQb2xhbmRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vanMtcG9sYW5kLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2pzLXBvbGFuZC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEpzUG9sYW5kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGV2ZW50cyQ6IE9ic2VydmFibGU8QXJyYXk8RXZlbnRJdGVtPj47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRlbnRmdWw6IENvbnRlbnRmdWxTZXJ2aWNlKSB7XG4gICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cbiAgXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICAgIHRoaXMuZXZlbnRzJCA9IHRoaXMuY29udGVudGZ1bC5nZXRFdmVudEl0ZW1zKDEwMCwgRXZlbnRJdGVtVHlwZS5KU1BPTEFORCk7XG4gICAgfVxufVxuIl19