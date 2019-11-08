import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from "./containers/home/home.component";
import { ScheduleComponent } from "./containers/schedule/schedule.component";
import { WorkshopsComponent } from "./containers/workshops/workshops.component";
import { NgGirlsComponent } from "./containers/ng-girls/ng-girls.component";
import { InfoComponent } from "./containers/info/info.component";
import { AboutComponent } from "./containers/about/about.component";
import { SpeakersComponent } from "./containers/speakers/speakers.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "schedule",
        component: ScheduleComponent
    },
    {
        path: "workshops",
        component: WorkshopsComponent
    },
    {
        path: "ng-girls",
        component: NgGirlsComponent
    },
    {
        path: "speakers",
        component: SpeakersComponent
    },
    {
        path: "info",
        component: InfoComponent
    },
    {
        path: "about",
        component: AboutComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
