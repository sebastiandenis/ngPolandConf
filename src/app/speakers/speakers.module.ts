import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SpeakersRoutingModule } from "./speakers-routing.module";
import { SpeakersComponent } from "./speakers.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SpeakersRoutingModule
    ],
    declarations: [
        SpeakersComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BrowseModule { }
