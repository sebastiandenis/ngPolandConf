import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { JsPolandComponent } from "./containers/jspoland/js-poland.component";
import { NgPolandComponent } from "./containers/ngpoland/ng-poland.component";
import { ScheduleRoutingModule } from "~/app/schedule/schedule-routing.module";
import { ScheduleComponent } from "~/app/schedule/schedule.component";
import { WorkshopsComponent } from "./containers/workshops/workshops.component";
import { WorkshopComponent } from "./components/workshop/workshop.component";
import { EventItemComponent } from "./components/event-item/event-item.component";


@NgModule({
  imports: [NativeScriptCommonModule, ScheduleRoutingModule],
  declarations: [
    EventItemComponent,
    ScheduleComponent,
    WorkshopsComponent,
    WorkshopComponent,
    NgPolandComponent,
    JsPolandComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ScheduleModule {}
