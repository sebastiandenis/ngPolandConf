import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "schedule", loadChildren: "~/app/schedule/schedule.module#ScheduleModule" },
    { path: "workshops", loadChildren: "~/app/workshops/workshops.module#WorkshopsModule" },
    { path: "ng-girls", loadChildren: "~/app/ng-girls/ng-girls.module#NgGirlsModule" },
    { path: "speakers", loadChildren: "~/app/speakers/speakers.module#SpeakersModule" },
    { path: "info", loadChildren: "~/app/info/info.module#InfoModule" },
    { path: "about", loadChildren: "~/app/about/about.module#AboutModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
