import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    {
        path: "home",
        loadChildren: () =>
            import("~/app/home/home.module").then((m) => m.HomeModule)
    },
    {
        path: "schedule",
        loadChildren: () =>
            import("~/app/schedule/schedule.module").then((m) => m.ScheduleModule)
    },
    {
        path: "workshops",
        loadChildren: () =>
            import("~/app/workshops/workshops.module").then(
                (m) => m.WorkshopsModule
            )
    },
    {
        path: "ng-girls",
        loadChildren: () =>
            import("~/app/ng-girls/ng-girls.module").then((m) => m.NgGirlsModule)
    },
    {
        path: "speakers",
        loadChildren: () =>
            import("~/app/speakers/speakers.module").then((m) => m.SpeakersModule)
    },
    {
        path: "info",
        loadChildren: () =>
            import("~/app/info/info.module").then((m) => m.InfoModule)
    },
    {
        path: "about",
        loadChildren: () =>
            import("~/app/about/about.module").then((m) => m.AboutModule)
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
