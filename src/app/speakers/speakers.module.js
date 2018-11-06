"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var speaker_component_1 = require("./components/speaker/speaker.component");
var speakers_list_component_1 = require("./containters/speakers-list/speakers-list.component");
var speakers_routing_module_1 = require("./speakers-routing.module");
var speakers_component_1 = require("./speakers.component");
var SpeakersModule = /** @class */ (function () {
    function SpeakersModule() {
    }
    SpeakersModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                speakers_routing_module_1.SpeakersRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                speakers_component_1.SpeakersComponent,
                speaker_component_1.SpeakerComponent,
                speakers_list_component_1.SpeakersListComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SpeakersModule);
    return SpeakersModule;
}());
exports.SpeakersModule = SpeakersModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYWtlcnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BlYWtlcnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSx5REFBdUQ7QUFDdkQsNEVBQTBFO0FBQzFFLCtGQUE0RjtBQUM1RixxRUFBa0U7QUFDbEUsMkRBQXlEO0FBc0J6RDtJQUFBO0lBQThCLENBQUM7SUFBbEIsY0FBYztRQWYxQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QiwrQ0FBcUI7Z0JBQ3JCLDRCQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysc0NBQWlCO2dCQUNqQixvQ0FBZ0I7Z0JBQ2hCLCtDQUFxQjthQUN4QjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtBQUFsQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XHJcbmltcG9ydCB7IFNwZWFrZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NwZWFrZXIvc3BlYWtlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU3BlYWtlcnNMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29udGFpbnRlcnMvc3BlYWtlcnMtbGlzdC9zcGVha2Vycy1saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTcGVha2Vyc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9zcGVha2Vycy1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBTcGVha2Vyc0NvbXBvbmVudCB9IGZyb20gXCIuL3NwZWFrZXJzLmNvbXBvbmVudFwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBTcGVha2Vyc1JvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgU3BlYWtlcnNDb21wb25lbnQsXHJcbiAgICAgICAgU3BlYWtlckNvbXBvbmVudCxcclxuICAgICAgICBTcGVha2Vyc0xpc3RDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3BlYWtlcnNNb2R1bGUgeyB9XHJcbiJdfQ==