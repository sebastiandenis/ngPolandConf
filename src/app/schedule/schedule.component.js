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
            ? (actionBarText.text = "Schedule - NG Poland")
            : (actionBarText.text = "Schedule - JS Poland");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZWR1bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGlDQUFtQztBQUluQyxnQ0FBK0I7QUFRL0I7SUFFRSwyQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDNUIscURBQXFEO0lBQ3ZELENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0UsdUNBQXVDO0lBQ3pDLENBQUM7SUFFRCw2Q0FBaUIsR0FBakI7UUFDRSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsa0RBQXNCLEdBQXRCLFVBQXVCLE1BQU07UUFDM0IsSUFBTSxhQUFhLEdBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNyRSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxzQkFBc0IsQ0FBQztZQUMvQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLHNCQUFzQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQXBCVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7eUNBRzBCLFdBQUk7T0FGbkIsaUJBQWlCLENBcUI3QjtJQUFELHdCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJTY2hlZHVsZVwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9zY2hlZHVsZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9zY2hlZHVsZS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgfVxyXG5cclxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RlZEluZGV4Q2hhbmdlZCgkZXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGFjdGlvbkJhclRleHQgPSA8TGFiZWw+dGhpcy5wYWdlLmdldFZpZXdCeUlkKFwiYWJTY2hlZHVsZVRleHRcIik7XHJcbiAgICAkZXZlbnQubmV3SW5kZXggPT09IDBcclxuICAgICAgPyAoYWN0aW9uQmFyVGV4dC50ZXh0ID0gXCJTY2hlZHVsZSAtIE5HIFBvbGFuZFwiKVxyXG4gICAgICA6IChhY3Rpb25CYXJUZXh0LnRleHQgPSBcIlNjaGVkdWxlIC0gSlMgUG9sYW5kXCIpO1xyXG4gIH1cclxufVxyXG4iXX0=