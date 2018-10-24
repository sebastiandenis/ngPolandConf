import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { AccordionModule } from "nativescript-accordion/angular";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { InfoRoutingModule } from "./info-routing.module";
import { InfoComponent } from "./info.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        InfoRoutingModule,
        AccordionModule
    ],
    declarations: [
        InfoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class InfoModule { }
