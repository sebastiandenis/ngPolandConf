"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-accordion/angular");
var common_1 = require("nativescript-angular/common");
var info_routing_module_1 = require("./info-routing.module");
var info_component_1 = require("./info.component");
var InfoModule = /** @class */ (function () {
    function InfoModule() {
    }
    InfoModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                info_routing_module_1.InfoRoutingModule,
                angular_1.AccordionModule
            ],
            declarations: [
                info_component_1.InfoComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], InfoModule);
    return InfoModule;
}());
exports.InfoModule = InfoModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmZvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCwwREFBaUU7QUFDakUsc0RBQXVFO0FBRXZFLDZEQUEwRDtBQUMxRCxtREFBaUQ7QUFlakQ7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQWJ0QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qix1Q0FBaUI7Z0JBQ2pCLHlCQUFlO2FBQ2xCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDhCQUFhO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY2NvcmRpb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFjY29yZGlvbi9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IEluZm9Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vaW5mby1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgSW5mb0NvbXBvbmVudCB9IGZyb20gXCIuL2luZm8uY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEluZm9Sb3V0aW5nTW9kdWxlLFxuICAgICAgICBBY2NvcmRpb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBJbmZvQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEluZm9Nb2R1bGUgeyB9XG4iXX0=