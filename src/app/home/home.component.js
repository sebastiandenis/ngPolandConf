"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var router_1 = require("nativescript-angular/router");
var orientation = require("nativescript-orientation");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(routerExtensions, changeDetectorRef) {
        this.routerExtensions = routerExtensions;
        this.changeDetectorRef = changeDetectorRef;
        this.isLandscape = false;
        // Use the component constructor to inject providers.
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (orientation.getOrientation() === "landscape") {
            this.isLandscape = true;
        }
        else {
            this.isLandscape = false;
        }
        this.changeDetectorRef.detectChanges();
        this.orientationApplier = orientation.addOrientationApplier(function (o) {
            if (orientation.getOrientation() === "landscape") {
                _this.isLandscape = true;
            }
            else {
                _this.isLandscape = false;
            }
            _this.changeDetectorRef.detectChanges();
        });
    };
    HomeComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    HomeComponent.prototype.onNavItemTap = function (navItemRoute, sl) {
        var _this = this;
        sl.className = "";
        sl.className = "highlighted";
        setTimeout(function () {
            _this.routerExtensions.navigate([navItemRoute], {
                transition: {
                    name: "flip"
                }
            });
        }, 300);
        var sideDrawer = app.getRootView();
        sideDrawer.closeDrawer();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        orientation.removeOrientationApplier(this.orientationApplier);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            core_1.ChangeDetectorRef])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUNoRixpQ0FBbUM7QUFDbkMsc0RBQStEO0FBRy9ELElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBUXhEO0lBR0UsdUJBQ1UsZ0JBQWtDLEVBQ2xDLGlCQUFvQztRQURwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFIOUMsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFLbEIscURBQXFEO0lBQ3ZELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBZ0JDO1FBZkMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQztRQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV2QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxDQUFDLHFCQUFxQixDQUFDLFVBQUMsQ0FBTTtZQUNqRSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDakQsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDMUIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQzNCLENBQUM7WUFDRCxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQseUNBQWlCLEdBQWpCO1FBQ0UsSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxZQUFvQixFQUFFLEVBQU87UUFBMUMsaUJBYUM7UUFaQyxFQUFFLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNsQixFQUFFLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztRQUM3QixVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQzdDLFVBQVUsRUFBRTtvQkFDVixJQUFJLEVBQUUsTUFBTTtpQkFDYjthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVSLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0UsV0FBVyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFsRFUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDcEMsQ0FBQzt5Q0FLNEIseUJBQWdCO1lBQ2Ysd0JBQWlCO09BTG5DLGFBQWEsQ0FtRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQW5ERCxJQW1EQztBQW5EWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcblxyXG5jb25zdCBvcmllbnRhdGlvbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtb3JpZW50YXRpb25cIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIG9yaWVudGF0aW9uQXBwbGllcjogYW55O1xyXG4gIGlzTGFuZHNjYXBlID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKG9yaWVudGF0aW9uLmdldE9yaWVudGF0aW9uKCkgPT09IFwibGFuZHNjYXBlXCIpIHtcclxuICAgICAgdGhpcy5pc0xhbmRzY2FwZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzTGFuZHNjYXBlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuXHJcbiAgICB0aGlzLm9yaWVudGF0aW9uQXBwbGllciA9IG9yaWVudGF0aW9uLmFkZE9yaWVudGF0aW9uQXBwbGllcigobzogYW55KSA9PiB7XHJcbiAgICAgIGlmIChvcmllbnRhdGlvbi5nZXRPcmllbnRhdGlvbigpID09PSBcImxhbmRzY2FwZVwiKSB7XHJcbiAgICAgICAgdGhpcy5pc0xhbmRzY2FwZSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pc0xhbmRzY2FwZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gIH1cclxuXHJcbiAgb25OYXZJdGVtVGFwKG5hdkl0ZW1Sb3V0ZTogc3RyaW5nLCBzbDogYW55KTogdm9pZCB7XHJcbiAgICBzbC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgc2wuY2xhc3NOYW1lID0gXCJoaWdobGlnaHRlZFwiO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbbmF2SXRlbVJvdXRlXSwge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIG5hbWU6IFwiZmxpcFwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgc2lkZURyYXdlci5jbG9zZURyYXdlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBvcmllbnRhdGlvbi5yZW1vdmVPcmllbnRhdGlvbkFwcGxpZXIodGhpcy5vcmllbnRhdGlvbkFwcGxpZXIpO1xyXG4gIH1cclxufVxyXG4iXX0=