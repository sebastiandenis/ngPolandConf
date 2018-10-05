"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var speakers_routing_module_1 = require("./speakers-routing.module");
var speakers_component_1 = require("./speakers.component");
var speaker_component_1 = require("./components/speaker/speaker.component");
var speakers_list_component_1 = require("./containters/speakers-list/speakers-list.component");
var speaker_details_component_1 = require("./components/speaker-details/speaker-details.component");
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
                speakers_list_component_1.SpeakersListComponent,
                speaker_details_component_1.SpeakerDetailsComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            entryComponents: [
                speaker_details_component_1.SpeakerDetailsComponent
            ]
        })
    ], SpeakersModule);
    return SpeakersModule;
}());
exports.SpeakersModule = SpeakersModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYWtlcnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BlYWtlcnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSxxRUFBa0U7QUFDbEUsMkRBQXlEO0FBQ3pELDRFQUEwRTtBQUMxRSwrRkFBNEY7QUFDNUYsb0dBQWlHO0FBcUJqRztJQUFBO0lBQThCLENBQUM7SUFBbEIsY0FBYztRQWxCMUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsK0NBQXFCO2FBQ3hCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHNDQUFpQjtnQkFDakIsb0NBQWdCO2dCQUNoQiwrQ0FBcUI7Z0JBQ3JCLG1EQUF1QjthQUMxQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7WUFDRCxlQUFlLEVBQUU7Z0JBQ2IsbURBQXVCO2FBQzFCO1NBQ0osQ0FBQztPQUNXLGNBQWMsQ0FBSTtJQUFELHFCQUFDO0NBQUEsQUFBL0IsSUFBK0I7QUFBbEIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IFNwZWFrZXJzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3NwZWFrZXJzLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBTcGVha2Vyc0NvbXBvbmVudCB9IGZyb20gXCIuL3NwZWFrZXJzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU3BlYWtlckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvc3BlYWtlci9zcGVha2VyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU3BlYWtlcnNMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29udGFpbnRlcnMvc3BlYWtlcnMtbGlzdC9zcGVha2Vycy1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU3BlYWtlckRldGFpbHNDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NwZWFrZXItZGV0YWlscy9zcGVha2VyLWRldGFpbHMuY29tcG9uZW50XCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgU3BlYWtlcnNSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3BlYWtlcnNDb21wb25lbnQsXG4gICAgICAgIFNwZWFrZXJDb21wb25lbnQsXG4gICAgICAgIFNwZWFrZXJzTGlzdENvbXBvbmVudCxcbiAgICAgICAgU3BlYWtlckRldGFpbHNDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIFNwZWFrZXJEZXRhaWxzQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTcGVha2Vyc01vZHVsZSB7IH1cbiJdfQ==