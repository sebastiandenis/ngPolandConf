import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { NgGirlsRoutingModule } from "./ng-girls-routing.module";
import { NgGirlsComponent } from "./ng-girls.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NgGirlsRoutingModule
    ],
    declarations: [
        NgGirlsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NgGirlsModule { }
