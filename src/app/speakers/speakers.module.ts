import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { SpeakerComponent } from "./components/speaker/speaker.component";
import { SpeakersListComponent } from "./containters/speakers-list/speakers-list.component";
import { SpeakersRoutingModule } from "./speakers-routing.module";
import { SpeakersComponent } from "./speakers.component";

@NgModule({
    imports: [NativeScriptCommonModule, SpeakersRoutingModule, SharedModule],
    declarations: [SpeakersComponent, SpeakerComponent, SpeakersListComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SpeakersModule {}
