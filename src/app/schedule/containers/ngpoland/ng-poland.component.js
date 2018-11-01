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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcG9sYW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nLXBvbGFuZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFHbEQsd0VBQXFGO0FBUXJGO0lBSUUsMkJBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQy9DLHFEQUFxRDtJQUN2RCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNFLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxrQ0FBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFYVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7eUNBS2dDLHNDQUFpQjtPQUp0QyxpQkFBaUIsQ0FZN0I7SUFBRCx3QkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEV2ZW50SXRlbSB9IGZyb20gXCJ+L2FwcC9tb2RlbHMvZXZlbnQtaXRlbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBDb250ZW50ZnVsU2VydmljZSwgRXZlbnRJdGVtVHlwZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9jb250ZW50ZnVsLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIk5nUG9sYW5kXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL25nLXBvbGFuZC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9uZy1wb2xhbmQuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdQb2xhbmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBldmVudHMkOiBPYnNlcnZhYmxlPEFycmF5PEV2ZW50SXRlbT4+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRlbnRmdWw6IENvbnRlbnRmdWxTZXJ2aWNlKSB7XHJcbiAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgIHRoaXMuZXZlbnRzJCA9IHRoaXMuY29udGVudGZ1bC5nZXRFdmVudEl0ZW1zKDEwMCwgRXZlbnRJdGVtVHlwZS5OR1BPTEFORCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==