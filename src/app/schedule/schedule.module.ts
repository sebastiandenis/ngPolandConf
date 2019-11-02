import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ScheduleRoutingModule } from "~/app/schedule/schedule-routing.module";
import { ScheduleComponent } from "~/app/schedule/schedule.component";
import { SharedModule } from "../shared/shared.module";
import { EventItemComponent } from "./components/event-item/event-item.component";
import { JsPolandComponent } from "./containers/jspoland/js-poland.component";
import { NgPolandComponent } from "./containers/ngpoland/ng-poland.component";

@NgModule({
    imports: [NativeScriptCommonModule, ScheduleRoutingModule, SharedModule],
    declarations: [
        EventItemComponent,
        ScheduleComponent,
        NgPolandComponent,
        JsPolandComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ScheduleModule {}
