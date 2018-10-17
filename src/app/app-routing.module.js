"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "/schedule", pathMatch: "full" },
    { path: "schedule", loadChildren: "~/app/schedule/schedule.module#ScheduleModule" },
    { path: "workshops", loadChildren: "~/app/workshops/workshops.module#WorkshopsModule" },
    { path: "ng-girls", loadChildren: "~/app/ng-girls/ng-girls.module#NgGirlsModule" },
    { path: "speakers", loadChildren: "~/app/speakers/speakers.module#SpeakersModule" },
    { path: "info", loadChildren: "~/app/info/info.module#InfoModule" },
    { path: "about", loadChildren: "~/app/about/about.module#AboutModule" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3hELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsK0NBQStDLEVBQUU7SUFDbkYsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxrREFBa0QsRUFBRTtJQUN2RixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLDhDQUE4QyxFQUFFO0lBQ2xGLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsK0NBQStDLEVBQUU7SUFDbkYsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxtQ0FBbUMsRUFBRTtJQUNuRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLHNDQUFzQyxFQUFFO0NBQzFFLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9zY2hlZHVsZVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcInNjaGVkdWxlXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9zY2hlZHVsZS9zY2hlZHVsZS5tb2R1bGUjU2NoZWR1bGVNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJ3b3Jrc2hvcHNcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3dvcmtzaG9wcy93b3Jrc2hvcHMubW9kdWxlI1dvcmtzaG9wc01vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcIm5nLWdpcmxzXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9uZy1naXJscy9uZy1naXJscy5tb2R1bGUjTmdHaXJsc01vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcInNwZWFrZXJzXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9zcGVha2Vycy9zcGVha2Vycy5tb2R1bGUjU3BlYWtlcnNNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJpbmZvXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9pbmZvL2luZm8ubW9kdWxlI0luZm9Nb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJhYm91dFwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvYWJvdXQvYWJvdXQubW9kdWxlI0Fib3V0TW9kdWxlXCIgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==