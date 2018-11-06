"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var page_1 = require("ui/page");
var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(page) {
        this.page = page;
        // Use the component constructor to inject providers.
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    ScheduleComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    ScheduleComponent.prototype.onSelectedIndexChanged = function ($event) {
        var actionBarText = this.page.getViewById("abScheduleText");
        $event.newIndex === 0
            ? (actionBarText.text = "Schedule - ngPoland")
            : (actionBarText.text = "Schedule - jsPoland");
    };
    ScheduleComponent = __decorate([
        core_1.Component({
            selector: "Schedule",
            moduleId: module.id,
            templateUrl: "./schedule.component.html",
            styleUrls: ["./schedule.component.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], ScheduleComponent);
    return ScheduleComponent;
}());
exports.ScheduleComponent = ScheduleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZWR1bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGlDQUFtQztBQUluQyxnQ0FBK0I7QUFRL0I7SUFHRSwyQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDNUIscURBQXFEO0lBQ3ZELENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0UsdUNBQXVDO0lBQ3pDLENBQUM7SUFFRCw2Q0FBaUIsR0FBakI7UUFDRSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsa0RBQXNCLEdBQXRCLFVBQXVCLE1BQU07UUFDM0IsSUFBTSxhQUFhLEdBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNyRSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQztZQUM5QyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQXJCVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7eUNBSTBCLFdBQUk7T0FIbkIsaUJBQWlCLENBc0I3QjtJQUFELHdCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJTY2hlZHVsZVwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9zY2hlZHVsZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9zY2hlZHVsZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gIH1cclxuXHJcbiAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0ZWRJbmRleENoYW5nZWQoJGV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBhY3Rpb25CYXJUZXh0ID0gPExhYmVsPnRoaXMucGFnZS5nZXRWaWV3QnlJZChcImFiU2NoZWR1bGVUZXh0XCIpO1xyXG4gICAgJGV2ZW50Lm5ld0luZGV4ID09PSAwXHJcbiAgICAgID8gKGFjdGlvbkJhclRleHQudGV4dCA9IFwiU2NoZWR1bGUgLSBuZ1BvbGFuZFwiKVxyXG4gICAgICA6IChhY3Rpb25CYXJUZXh0LnRleHQgPSBcIlNjaGVkdWxlIC0ganNQb2xhbmRcIik7XHJcbiAgfVxyXG59XHJcbiJdfQ==