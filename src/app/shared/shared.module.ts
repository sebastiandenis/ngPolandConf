import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SpeakerDetailsComponent } from "./components/speaker-details/speaker-details.component";

@NgModule({
  imports: [NativeScriptCommonModule],
  declarations: [SpeakerDetailsComponent],
  exports: [SpeakerDetailsComponent],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [SpeakerDetailsComponent]
})
export class SharedModule {}
