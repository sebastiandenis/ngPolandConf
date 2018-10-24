import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { InfoRoutingModule } from "./info-routing.module";
import { InfoComponent } from "./info.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        InfoRoutingModule
    ],
    declarations: [
        InfoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class InfoModule { }
