"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsbUNBQW1DLEVBQUU7SUFDbkUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSwrQ0FBK0MsRUFBRTtJQUNuRixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGtEQUFrRCxFQUFFO0lBQ3ZGLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsOENBQThDLEVBQUU7SUFDbEYsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSwrQ0FBK0MsRUFBRTtJQUNuRixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLG1DQUFtQyxFQUFFO0lBQ25FLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsc0NBQXNDLEVBQUU7Q0FDMUUsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2hvbWVcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJob21lXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJzY2hlZHVsZVwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvc2NoZWR1bGUvc2NoZWR1bGUubW9kdWxlI1NjaGVkdWxlTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwid29ya3Nob3BzXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC93b3Jrc2hvcHMvd29ya3Nob3BzLm1vZHVsZSNXb3Jrc2hvcHNNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJuZy1naXJsc1wiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvbmctZ2lybHMvbmctZ2lybHMubW9kdWxlI05nR2lybHNNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJzcGVha2Vyc1wiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvc3BlYWtlcnMvc3BlYWtlcnMubW9kdWxlI1NwZWFrZXJzTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiaW5mb1wiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvaW5mby9pbmZvLm1vZHVsZSNJbmZvTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiYWJvdXRcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2Fib3V0L2Fib3V0Lm1vZHVsZSNBYm91dE1vZHVsZVwiIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=