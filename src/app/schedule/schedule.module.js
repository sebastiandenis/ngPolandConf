"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var schedule_routing_module_1 = require("~/app/schedule/schedule-routing.module");
var schedule_component_1 = require("~/app/schedule/schedule.component");
var shared_module_1 = require("../shared/shared.module");
var event_item_component_1 = require("./components/event-item/event-item.component");
var js_poland_component_1 = require("./containers/jspoland/js-poland.component");
var ng_poland_component_1 = require("./containers/ngpoland/ng-poland.component");
var ScheduleModule = /** @class */ (function () {
    function ScheduleModule() {
    }
    ScheduleModule = __decorate([
        core_1.NgModule({
            imports: [common_1.NativeScriptCommonModule, schedule_routing_module_1.ScheduleRoutingModule, shared_module_1.SharedModule],
            declarations: [
                event_item_component_1.EventItemComponent,
                schedule_component_1.ScheduleComponent,
                ng_poland_component_1.NgPolandComponent,
                js_poland_component_1.JsPolandComponent
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], ScheduleModule);
    return ScheduleModule;
}());
exports.ScheduleModule = ScheduleModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZWR1bGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxrRkFBK0U7QUFDL0Usd0VBQXNFO0FBQ3RFLHlEQUF1RDtBQUN2RCxxRkFBa0Y7QUFDbEYsaUZBQThFO0FBQzlFLGlGQUE4RTtBQWE5RTtJQUFBO0lBQTZCLENBQUM7SUFBakIsY0FBYztRQVYxQixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsRUFBRSwrQ0FBcUIsRUFBRSw0QkFBWSxDQUFDO1lBQ3hFLFlBQVksRUFBRTtnQkFDWix5Q0FBa0I7Z0JBQ2xCLHNDQUFpQjtnQkFDakIsdUNBQWlCO2dCQUNqQix1Q0FBaUI7YUFDbEI7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csY0FBYyxDQUFHO0lBQUQscUJBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBTY2hlZHVsZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwifi9hcHAvc2NoZWR1bGUvc2NoZWR1bGUtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgU2NoZWR1bGVDb21wb25lbnQgfSBmcm9tIFwifi9hcHAvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBFdmVudEl0ZW1Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2V2ZW50LWl0ZW0vZXZlbnQtaXRlbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSnNQb2xhbmRDb21wb25lbnQgfSBmcm9tIFwiLi9jb250YWluZXJzL2pzcG9sYW5kL2pzLXBvbGFuZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTmdQb2xhbmRDb21wb25lbnQgfSBmcm9tIFwiLi9jb250YWluZXJzL25ncG9sYW5kL25nLXBvbGFuZC5jb21wb25lbnRcIjtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsIFNjaGVkdWxlUm91dGluZ01vZHVsZSwgU2hhcmVkTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEV2ZW50SXRlbUNvbXBvbmVudCxcclxuICAgIFNjaGVkdWxlQ29tcG9uZW50LFxyXG4gICAgTmdQb2xhbmRDb21wb25lbnQsXHJcbiAgICBKc1BvbGFuZENvbXBvbmVudFxyXG4gIF0sXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZU1vZHVsZSB7fVxyXG4iXX0=