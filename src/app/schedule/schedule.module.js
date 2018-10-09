"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var schedule_routing_module_1 = require("~/app/schedule/schedule-routing.module");
var schedule_component_1 = require("~/app/schedule/schedule.component");
var event_item_component_1 = require("./components/event-item/event-item.component");
var js_poland_component_1 = require("./containers/jspoland/js-poland.component");
var ng_poland_component_1 = require("./containers/ngpoland/ng-poland.component");
var ScheduleModule = /** @class */ (function () {
    function ScheduleModule() {
    }
    ScheduleModule = __decorate([
        core_1.NgModule({
            imports: [common_1.NativeScriptCommonModule, schedule_routing_module_1.ScheduleRoutingModule],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZWR1bGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxrRkFBK0U7QUFDL0Usd0VBQXNFO0FBQ3RFLHFGQUFrRjtBQUNsRixpRkFBOEU7QUFDOUUsaUZBQThFO0FBWTlFO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixjQUFjO1FBVjFCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixFQUFFLCtDQUFxQixDQUFDO1lBQzFELFlBQVksRUFBRTtnQkFDWix5Q0FBa0I7Z0JBQ2xCLHNDQUFpQjtnQkFDakIsdUNBQWlCO2dCQUNqQix1Q0FBaUI7YUFDbEI7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csY0FBYyxDQUFHO0lBQUQscUJBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFNjaGVkdWxlUm91dGluZ01vZHVsZSB9IGZyb20gXCJ+L2FwcC9zY2hlZHVsZS9zY2hlZHVsZS1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgU2NoZWR1bGVDb21wb25lbnQgfSBmcm9tIFwifi9hcHAvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFdmVudEl0ZW1Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2V2ZW50LWl0ZW0vZXZlbnQtaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEpzUG9sYW5kQ29tcG9uZW50IH0gZnJvbSBcIi4vY29udGFpbmVycy9qc3BvbGFuZC9qcy1wb2xhbmQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOZ1BvbGFuZENvbXBvbmVudCB9IGZyb20gXCIuL2NvbnRhaW5lcnMvbmdwb2xhbmQvbmctcG9sYW5kLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBTY2hlZHVsZVJvdXRpbmdNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBFdmVudEl0ZW1Db21wb25lbnQsXG4gICAgU2NoZWR1bGVDb21wb25lbnQsXG4gICAgTmdQb2xhbmRDb21wb25lbnQsXG4gICAgSnNQb2xhbmRDb21wb25lbnRcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlTW9kdWxlIHt9XG4iXX0=