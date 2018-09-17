"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var js_poland_component_1 = require("~/app/schedule/jspoland/js-poland.component");
var ng_poland_component_1 = require("~/app/schedule/ngpoland/ng-poland.component");
var schedule_routing_module_1 = require("~/app/schedule/schedule-routing.module");
var schedule_component_1 = require("~/app/schedule/schedule.component");
var workshops_component_1 = require("~/app/schedule/workshops/workshops.component");
var ScheduleModule = /** @class */ (function () {
    function ScheduleModule() {
    }
    ScheduleModule = __decorate([
        core_1.NgModule({
            imports: [common_1.NativeScriptCommonModule, schedule_routing_module_1.ScheduleRoutingModule],
            declarations: [
                schedule_component_1.ScheduleComponent,
                workshops_component_1.WorkshopsComponent,
                ng_poland_component_1.NgPolandComponent,
                js_poland_component_1.JsPolandComponent
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], ScheduleModule);
    return ScheduleModule;
}());
exports.ScheduleModule = ScheduleModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZWR1bGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxtRkFBZ0Y7QUFDaEYsbUZBQWdGO0FBQ2hGLGtGQUErRTtBQUMvRSx3RUFBc0U7QUFDdEUsb0ZBQWtGO0FBYWxGO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixjQUFjO1FBVjFCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixFQUFFLCtDQUFxQixDQUFDO1lBQzFELFlBQVksRUFBRTtnQkFDWixzQ0FBaUI7Z0JBQ2pCLHdDQUFrQjtnQkFDbEIsdUNBQWlCO2dCQUNqQix1Q0FBaUI7YUFDbEI7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csY0FBYyxDQUFHO0lBQUQscUJBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEpzUG9sYW5kQ29tcG9uZW50IH0gZnJvbSBcIn4vYXBwL3NjaGVkdWxlL2pzcG9sYW5kL2pzLXBvbGFuZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5nUG9sYW5kQ29tcG9uZW50IH0gZnJvbSBcIn4vYXBwL3NjaGVkdWxlL25ncG9sYW5kL25nLXBvbGFuZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNjaGVkdWxlUm91dGluZ01vZHVsZSB9IGZyb20gXCJ+L2FwcC9zY2hlZHVsZS9zY2hlZHVsZS1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgU2NoZWR1bGVDb21wb25lbnQgfSBmcm9tIFwifi9hcHAvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBXb3Jrc2hvcHNDb21wb25lbnQgfSBmcm9tIFwifi9hcHAvc2NoZWR1bGUvd29ya3Nob3BzL3dvcmtzaG9wcy5jb21wb25lbnRcIjtcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBTY2hlZHVsZVJvdXRpbmdNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTY2hlZHVsZUNvbXBvbmVudCxcbiAgICBXb3Jrc2hvcHNDb21wb25lbnQsXG4gICAgTmdQb2xhbmRDb21wb25lbnQsXG4gICAgSnNQb2xhbmRDb21wb25lbnRcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlTW9kdWxlIHt9XG4iXX0=