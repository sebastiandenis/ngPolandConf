"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contentful_service_1 = require("~/app/services/contentful.service");
var WorkshopsComponent = /** @class */ (function () {
    function WorkshopsComponent(contentful) {
        this.contentful = contentful;
        // Use the component constructor to inject providers.
    }
    WorkshopsComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.workshops$ = this.contentful.getWorkshops(100);
    };
    WorkshopsComponent = __decorate([
        core_1.Component({
            selector: "Workshops",
            moduleId: module.id,
            templateUrl: "./workshops.component.html",
            styleUrls: ["./workshops.component.css"]
        }),
        __metadata("design:paramtypes", [contentful_service_1.ContentfulService])
    ], WorkshopsComponent);
    return WorkshopsComponent;
}());
exports.WorkshopsComponent = WorkshopsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3Nob3BzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndvcmtzaG9wcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFHbEQsd0VBQXNFO0FBUXRFO0lBTUksNEJBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQzdDLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNJLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFiUSxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQzNDLENBQUM7eUNBT2tDLHNDQUFpQjtPQU54QyxrQkFBa0IsQ0FlOUI7SUFBRCx5QkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IFdvcmtzaG9wIH0gZnJvbSBcIn4vYXBwL21vZGVscy93b3Jrc2hvcC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBDb250ZW50ZnVsU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9jb250ZW50ZnVsLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiV29ya3Nob3BzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi93b3Jrc2hvcHMuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi93b3Jrc2hvcHMuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV29ya3Nob3BzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICB3b3Jrc2hvcHMkOiBPYnNlcnZhYmxlPEFycmF5PFdvcmtzaG9wPj47XHJcblxyXG4gIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGVudGZ1bDogQ29udGVudGZ1bFNlcnZpY2UpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgICAgIHRoaXMud29ya3Nob3BzJCA9IHRoaXMuY29udGVudGZ1bC5nZXRXb3Jrc2hvcHMoMTAwKTtcclxuICAgIH1cclxuICAgXHJcbn1cclxuIl19