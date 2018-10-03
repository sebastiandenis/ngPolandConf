"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var js_poland_component_1 = require("./containers/jspoland/js-poland.component");
var ng_poland_component_1 = require("./containers/ngpoland/ng-poland.component");
var schedule_routing_module_1 = require("~/app/schedule/schedule-routing.module");
var schedule_component_1 = require("~/app/schedule/schedule.component");
var workshops_component_1 = require("./containers/workshops/workshops.component");
var workshop_component_1 = require("./components/workshop/workshop.component");
var event_item_component_1 = require("./components/event-item/event-item.component");
var ScheduleModule = /** @class */ (function () {
    function ScheduleModule() {
    }
    ScheduleModule = __decorate([
        core_1.NgModule({
            imports: [common_1.NativeScriptCommonModule, schedule_routing_module_1.ScheduleRoutingModule],
            declarations: [
                event_item_component_1.EventItemComponent,
                schedule_component_1.ScheduleComponent,
                workshops_component_1.WorkshopsComponent,
                workshop_component_1.WorkshopComponent,
                ng_poland_component_1.NgPolandComponent,
                js_poland_component_1.JsPolandComponent
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], ScheduleModule);
    return ScheduleModule;
}());
exports.ScheduleModule = ScheduleModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZWR1bGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxpRkFBOEU7QUFDOUUsaUZBQThFO0FBQzlFLGtGQUErRTtBQUMvRSx3RUFBc0U7QUFDdEUsa0ZBQWdGO0FBQ2hGLCtFQUE2RTtBQUM3RSxxRkFBa0Y7QUFlbEY7SUFBQTtJQUE2QixDQUFDO0lBQWpCLGNBQWM7UUFaMUIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsaUNBQXdCLEVBQUUsK0NBQXFCLENBQUM7WUFDMUQsWUFBWSxFQUFFO2dCQUNaLHlDQUFrQjtnQkFDbEIsc0NBQWlCO2dCQUNqQix3Q0FBa0I7Z0JBQ2xCLHNDQUFpQjtnQkFDakIsdUNBQWlCO2dCQUNqQix1Q0FBaUI7YUFDbEI7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csY0FBYyxDQUFHO0lBQUQscUJBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEpzUG9sYW5kQ29tcG9uZW50IH0gZnJvbSBcIi4vY29udGFpbmVycy9qc3BvbGFuZC9qcy1wb2xhbmQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOZ1BvbGFuZENvbXBvbmVudCB9IGZyb20gXCIuL2NvbnRhaW5lcnMvbmdwb2xhbmQvbmctcG9sYW5kLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2NoZWR1bGVSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIn4vYXBwL3NjaGVkdWxlL3NjaGVkdWxlLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBTY2hlZHVsZUNvbXBvbmVudCB9IGZyb20gXCJ+L2FwcC9zY2hlZHVsZS9zY2hlZHVsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFdvcmtzaG9wc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbnRhaW5lcnMvd29ya3Nob3BzL3dvcmtzaG9wcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFdvcmtzaG9wQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy93b3Jrc2hvcC93b3Jrc2hvcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEV2ZW50SXRlbUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZXZlbnQtaXRlbS9ldmVudC1pdGVtLmNvbXBvbmVudFwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsIFNjaGVkdWxlUm91dGluZ01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEV2ZW50SXRlbUNvbXBvbmVudCxcbiAgICBTY2hlZHVsZUNvbXBvbmVudCxcbiAgICBXb3Jrc2hvcHNDb21wb25lbnQsXG4gICAgV29ya3Nob3BDb21wb25lbnQsXG4gICAgTmdQb2xhbmRDb21wb25lbnQsXG4gICAgSnNQb2xhbmRDb21wb25lbnRcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlTW9kdWxlIHt9XG4iXX0=