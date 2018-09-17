import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { JsPolandComponent } from "~/app/schedule/jspoland/js-poland.component";
import { NgPolandComponent } from "~/app/schedule/ngpoland/ng-poland.component";
import { ScheduleRoutingModule } from "~/app/schedule/schedule-routing.module";
import { ScheduleComponent } from "~/app/schedule/schedule.component";
import { WorkshopsComponent } from "~/app/schedule/workshops/workshops.component";


@NgModule({
  imports: [NativeScriptCommonModule, ScheduleRoutingModule],
  declarations: [
    ScheduleComponent,
    WorkshopsComponent,
    NgPolandComponent,
    JsPolandComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ScheduleModule {}
