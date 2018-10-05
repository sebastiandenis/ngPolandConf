import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SpeakersRoutingModule } from "./speakers-routing.module";
import { SpeakersComponent } from "./speakers.component";
import { SpeakerComponent } from "./components/speaker/speaker.component";
import { SpeakersListComponent } from "./containters/speakers-list/speakers-list.component";
import { SpeakerDetailsComponent } from "./components/speaker-details/speaker-details.component";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        SpeakersRoutingModule
    ],
    declarations: [
        SpeakersComponent,
        SpeakerComponent,
        SpeakersListComponent,
        SpeakerDetailsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [
        SpeakerDetailsComponent
    ]
})
export class SpeakersModule { }
