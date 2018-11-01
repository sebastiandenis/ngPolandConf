import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MdToHtmlPipe } from "../pipes/md-to-html.pipe";
import { InfoItemComponent } from "./components/info-item/info-item.component";
import { InfoRoutingModule } from "./info-routing.module";
import { InfoComponent } from "./info.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        InfoRoutingModule
    ],
    declarations: [
        InfoComponent, InfoItemComponent, MdToHtmlPipe
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class InfoModule { }
