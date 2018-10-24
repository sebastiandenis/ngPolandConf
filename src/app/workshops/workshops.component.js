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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3Nob3BzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndvcmtzaG9wcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsaUNBQW1DO0FBSW5DLHdFQUFzRTtBQVF0RTtJQUdFLDRCQUFvQixVQUE2QjtRQUE3QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUMvQyxxREFBcUQ7SUFDdkQsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDRSx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsOENBQWlCLEdBQWpCO1FBQ0UsSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQWZVLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDekMsQ0FBQzt5Q0FJZ0Msc0NBQWlCO09BSHRDLGtCQUFrQixDQWdCOUI7SUFBRCx5QkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgV29ya3Nob3AgfSBmcm9tIFwifi9hcHAvbW9kZWxzL3dvcmtzaG9wLm1vZGVsXCI7XG5pbXBvcnQgeyBDb250ZW50ZnVsU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9jb250ZW50ZnVsLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIldvcmtzaG9wc1wiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL3dvcmtzaG9wcy5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vd29ya3Nob3BzLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgV29ya3Nob3BzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgd29ya3Nob3BzJDogT2JzZXJ2YWJsZTxBcnJheTxXb3Jrc2hvcD4+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGVudGZ1bDogQ29udGVudGZ1bFNlcnZpY2UpIHtcbiAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgdGhpcy53b3Jrc2hvcHMkID0gdGhpcy5jb250ZW50ZnVsLmdldFdvcmtzaG9wcygxMDApO1xuICB9XG5cbiAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICB9XG59XG4iXX0=