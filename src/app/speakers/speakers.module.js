"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var speakers_routing_module_1 = require("./speakers-routing.module");
var speakers_component_1 = require("./speakers.component");
var speaker_component_1 = require("./components/speaker/speaker.component");
var speakers_list_component_1 = require("./containters/speakers-list/speakers-list.component");
var SpeakersModule = /** @class */ (function () {
    function SpeakersModule() {
    }
    SpeakersModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                speakers_routing_module_1.SpeakersRoutingModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYWtlcnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BlYWtlcnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSxxRUFBa0U7QUFDbEUsMkRBQXlEO0FBQ3pELDRFQUEwRTtBQUMxRSwrRkFBNEY7QUFpQjVGO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBZDFCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLCtDQUFxQjthQUN4QjtZQUNELFlBQVksRUFBRTtnQkFDVixzQ0FBaUI7Z0JBQ2pCLG9DQUFnQjtnQkFDaEIsK0NBQXFCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxjQUFjLENBQUk7SUFBRCxxQkFBQztDQUFBLEFBQS9CLElBQStCO0FBQWxCLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBTcGVha2Vyc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9zcGVha2Vycy1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgU3BlYWtlcnNDb21wb25lbnQgfSBmcm9tIFwiLi9zcGVha2Vycy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNwZWFrZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NwZWFrZXIvc3BlYWtlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNwZWFrZXJzTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2NvbnRhaW50ZXJzL3NwZWFrZXJzLWxpc3Qvc3BlYWtlcnMtbGlzdC5jb21wb25lbnRcIjtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBTcGVha2Vyc1JvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTcGVha2Vyc0NvbXBvbmVudCxcbiAgICAgICAgU3BlYWtlckNvbXBvbmVudCxcbiAgICAgICAgU3BlYWtlcnNMaXN0Q29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFNwZWFrZXJzTW9kdWxlIHsgfVxuIl19