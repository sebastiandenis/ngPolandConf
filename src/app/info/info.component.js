"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var contentful_service_1 = require("../services/contentful.service");
var InfoComponent = /** @class */ (function () {
    function InfoComponent(contentful) {
        this.contentful = contentful;
        // Use the component constructor to inject providers.
    }
    InfoComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.infoItems$ = this.contentful.getInfoItems(100);
    };
    InfoComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    InfoComponent = __decorate([
        core_1.Component({
            selector: "Info",
            moduleId: module.id,
            templateUrl: "./info.component.html",
            styleUrls: ["./info.component.css"]
        }),
        __metadata("design:paramtypes", [contentful_service_1.ContentfulService])
    ], InfoComponent);
    return InfoComponent;
}());
exports.InfoComponent = InfoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpQ0FBbUM7QUFJbkMscUVBQW1FO0FBUW5FO0lBR0UsdUJBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQy9DLHFEQUFxRDtJQUN2RCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNFLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCx5Q0FBaUIsR0FBakI7UUFDRSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBZlUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDcEMsQ0FBQzt5Q0FJZ0Msc0NBQWlCO09BSHRDLGFBQWEsQ0FnQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgSW5mb0l0ZW0gfSBmcm9tIFwiLi4vbW9kZWxzL2luZm8taXRlbS5tb2RlbFwiO1xuaW1wb3J0IHsgQ29udGVudGZ1bFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY29udGVudGZ1bC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJJbmZvXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaW5mby5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vaW5mby5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEluZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpbmZvSXRlbXMkOiBPYnNlcnZhYmxlPEFycmF5PEluZm9JdGVtPj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250ZW50ZnVsOiBDb250ZW50ZnVsU2VydmljZSkge1xuICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICB0aGlzLmluZm9JdGVtcyQgPSB0aGlzLmNvbnRlbnRmdWwuZ2V0SW5mb0l0ZW1zKDEwMCk7XG4gIH1cblxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gIH1cbn1cbiJdfQ==