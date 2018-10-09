import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { WorkshopComponent } from "./components/workshop/workshop.component";
import { WorkshopsRoutingModule } from "./workshops-routing.module";
import { WorkshopsComponent } from "./workshops.component";

@NgModule({
  imports: [NativeScriptCommonModule, WorkshopsRoutingModule],
  declarations: [WorkshopsComponent, WorkshopComponent],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: []
})
export class WorkshopsModule {}
