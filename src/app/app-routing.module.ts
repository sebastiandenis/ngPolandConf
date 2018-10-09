import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/schedule", pathMatch: "full" },
    { path: "schedule", loadChildren: "~/app/schedule/schedule.module#ScheduleModule" },
    { path: "speakers", loadChildren: "~/app/speakers/speakers.module#SpeakersModule" },
    { path: "workshops", loadChildren: "~/app/workshops/workshops.module#WorkshopsModule" },
    { path: "info", loadChildren: "~/app/info/info.module#InfoModule" },
    { path: "about", loadChildren: "~/app/about/about.module#AboutModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
