"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "/schedule", pathMatch: "full" },
    { path: "schedule", loadChildren: "~/app/schedule/schedule.module#ScheduleModule" },
    { path: "speakers", loadChildren: "~/app/speakers/speakers.module#SpeakersModule" },
    { path: "workshops", loadChildren: "~/app/workshops/workshops.module#WorkshopsModule" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3hELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsK0NBQStDLEVBQUU7SUFDbkYsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSwrQ0FBK0MsRUFBRTtJQUNuRixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGtEQUFrRCxFQUFFO0lBQ3ZGLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsbUNBQW1DLEVBQUU7SUFDbkUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxzQ0FBc0MsRUFBRTtDQUMxRSxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvc2NoZWR1bGVcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJzY2hlZHVsZVwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvc2NoZWR1bGUvc2NoZWR1bGUubW9kdWxlI1NjaGVkdWxlTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwic3BlYWtlcnNcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3NwZWFrZXJzL3NwZWFrZXJzLm1vZHVsZSNTcGVha2Vyc01vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcIndvcmtzaG9wc1wiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvd29ya3Nob3BzL3dvcmtzaG9wcy5tb2R1bGUjV29ya3Nob3BzTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiaW5mb1wiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvaW5mby9pbmZvLm1vZHVsZSNJbmZvTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiYWJvdXRcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2Fib3V0L2Fib3V0Lm1vZHVsZSNBYm91dE1vZHVsZVwiIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=