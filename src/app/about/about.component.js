"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var utils = require("tns-core-modules/utils/utils");
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        // Use the component constructor to inject providers.
    }
    AboutComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    AboutComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    AboutComponent.prototype.onGitHubLinkTap = function () {
        utils.openUrl("https://github.com/sebastiandenis/NS-Event-App");
    };
    AboutComponent.prototype.showSebekDetails = function () {
        utils.openUrl("https://twitter.com/SebekD");
    };
    AboutComponent.prototype.showDarekDetails = function () {
        utils.openUrl("https://www.linkedin.com/in/ngkalbarczyk/");
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: "About",
            moduleId: module.id,
            templateUrl: "./about.component.html",
            styleUrls: ["./about.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGlDQUFtQztBQUVuQyxvREFBc0Q7QUFRdEQ7SUFFSTtRQUNJLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQsMENBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELHdDQUFlLEdBQWY7UUFDSSxLQUFLLENBQUMsT0FBTyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELHlDQUFnQixHQUFoQjtRQUNJLEtBQUssQ0FBQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQseUNBQWdCLEdBQWhCO1FBQ0ksS0FBSyxDQUFDLE9BQU8sQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUF6QlEsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzs7T0FDVyxjQUFjLENBMEIxQjtJQUFELHFCQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJBYm91dFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYWJvdXQuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9hYm91dC5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25HaXRIdWJMaW5rVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIHV0aWxzLm9wZW5VcmwoXCJodHRwczovL2dpdGh1Yi5jb20vc2ViYXN0aWFuZGVuaXMvTlMtRXZlbnQtQXBwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dTZWJla0RldGFpbHMoKTogdm9pZCB7XHJcbiAgICAgICAgdXRpbHMub3BlblVybChcImh0dHBzOi8vdHdpdHRlci5jb20vU2ViZWtEXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEYXJla0RldGFpbHMoKTogdm9pZCB7XHJcbiAgICAgICAgdXRpbHMub3BlblVybChcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9uZ2thbGJhcmN6eWsvXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==