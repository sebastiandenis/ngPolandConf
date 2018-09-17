import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ScheduleComponent } from "~/app/schedule/schedule.component";

const routes: Routes = [
    { path: "", component: ScheduleComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ScheduleRoutingModule { }
