"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var contentful_service_1 = require("../services/contentful.service");
var NgGirlsComponent = /** @class */ (function () {
    function NgGirlsComponent(contentful) {
        this.contentful = contentful;
        // Use the component constructor to inject providers.
    }
    NgGirlsComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.content$ = this.contentful.getSimpleContentById("ng-girls-workshops");
    };
    NgGirlsComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    NgGirlsComponent = __decorate([
        core_1.Component({
            selector: "NgGirls",
            moduleId: module.id,
            templateUrl: "./ng-girls.component.html"
        }),
        __metadata("design:paramtypes", [contentful_service_1.ContentfulService])
    ], NgGirlsComponent);
    return NgGirlsComponent;
}());
exports.NgGirlsComponent = NgGirlsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZ2lybHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmctZ2lybHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGlDQUFtQztBQUluQyxxRUFBbUU7QUFPbkU7SUFJSSwwQkFBb0IsVUFBNkI7UUFBN0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0MscURBQXFEO0lBQ3pELENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCw0Q0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBaEJRLGdCQUFnQjtRQUw1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7U0FDM0MsQ0FBQzt5Q0FLa0Msc0NBQWlCO09BSnhDLGdCQUFnQixDQWlCNUI7SUFBRCx1QkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgU2ltcGxlQ29udGVudCB9IGZyb20gXCIuLi9tb2RlbHMvc2ltcGxlLWNvbnRlbnQubW9kZWxcIjtcbmltcG9ydCB7IENvbnRlbnRmdWxTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NvbnRlbnRmdWwuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJOZ0dpcmxzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL25nLWdpcmxzLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTmdHaXJsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb250ZW50JDogT2JzZXJ2YWJsZTxTaW1wbGVDb250ZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGVudGZ1bDogQ29udGVudGZ1bFNlcnZpY2UpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgICAgIHRoaXMuY29udGVudCQgPSB0aGlzLmNvbnRlbnRmdWwuZ2V0U2ltcGxlQ29udGVudEJ5SWQoXCJuZy1naXJscy13b3Jrc2hvcHNcIik7XG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxufVxuIl19