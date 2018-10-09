"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
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
    WorkshopsComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3Nob3BzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndvcmtzaG9wcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsaUNBQW1DO0FBSW5DLHdFQUFzRTtBQVF0RTtJQUdFLDRCQUFvQixVQUE2QjtRQUE3QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUMvQyxxREFBcUQ7SUFDdkQsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDRSx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsOENBQWlCLEdBQWpCO1FBQ0UsSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQWZVLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDekMsQ0FBQzt5Q0FJZ0Msc0NBQWlCO09BSHRDLGtCQUFrQixDQWdCOUI7SUFBRCx5QkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBXb3Jrc2hvcCB9IGZyb20gXCJ+L2FwcC9tb2RlbHMvd29ya3Nob3AubW9kZWxcIjtcclxuaW1wb3J0IHsgQ29udGVudGZ1bFNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvY29udGVudGZ1bC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJXb3Jrc2hvcHNcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vd29ya3Nob3BzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL3dvcmtzaG9wcy5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXb3Jrc2hvcHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHdvcmtzaG9wcyQ6IE9ic2VydmFibGU8QXJyYXk8V29ya3Nob3A+PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250ZW50ZnVsOiBDb250ZW50ZnVsU2VydmljZSkge1xyXG4gICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICB0aGlzLndvcmtzaG9wcyQgPSB0aGlzLmNvbnRlbnRmdWwuZ2V0V29ya3Nob3BzKDEwMCk7XHJcbiAgfVxyXG5cclxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gIH1cclxufVxyXG4iXX0=