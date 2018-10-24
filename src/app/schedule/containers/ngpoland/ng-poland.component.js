"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contentful_service_1 = require("~/app/services/contentful.service");
var NgPolandComponent = /** @class */ (function () {
    function NgPolandComponent(contentful) {
        this.contentful = contentful;
        // Use the component constructor to inject providers.
    }
    NgPolandComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.events$ = this.contentful.getEventItems(100, contentful_service_1.EventItemType.NGPOLAND);
    };
    NgPolandComponent = __decorate([
        core_1.Component({
            selector: "NgPoland",
            moduleId: module.id,
            templateUrl: "./ng-poland.component.html",
            styleUrls: ["./ng-poland.component.css"]
        }),
        __metadata("design:paramtypes", [contentful_service_1.ContentfulService])
    ], NgPolandComponent);
    return NgPolandComponent;
}());
exports.NgPolandComponent = NgPolandComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcG9sYW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nLXBvbGFuZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFHbEQsd0VBQXFGO0FBUXJGO0lBSUUsMkJBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQy9DLHFEQUFxRDtJQUN2RCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNFLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxrQ0FBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFYVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7eUNBS2dDLHNDQUFpQjtPQUp0QyxpQkFBaUIsQ0FZN0I7SUFBRCx3QkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgRXZlbnRJdGVtIH0gZnJvbSBcIn4vYXBwL21vZGVscy9ldmVudC1pdGVtLm1vZGVsXCI7XG5pbXBvcnQgeyBDb250ZW50ZnVsU2VydmljZSwgRXZlbnRJdGVtVHlwZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9jb250ZW50ZnVsLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIk5nUG9sYW5kXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbmctcG9sYW5kLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9uZy1wb2xhbmQuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBOZ1BvbGFuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZXZlbnRzJDogT2JzZXJ2YWJsZTxBcnJheTxFdmVudEl0ZW0+PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRlbnRmdWw6IENvbnRlbnRmdWxTZXJ2aWNlKSB7XG4gICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgIHRoaXMuZXZlbnRzJCA9IHRoaXMuY29udGVudGZ1bC5nZXRFdmVudEl0ZW1zKDEwMCwgRXZlbnRJdGVtVHlwZS5OR1BPTEFORCk7XG4gIH1cbn1cbiJdfQ==