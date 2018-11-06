"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var workshop_component_1 = require("./components/workshop/workshop.component");
var workshops_routing_module_1 = require("./workshops-routing.module");
var workshops_component_1 = require("./workshops.component");
var WorkshopsModule = /** @class */ (function () {
    function WorkshopsModule() {
    }
    WorkshopsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.NativeScriptCommonModule, workshops_routing_module_1.WorkshopsRoutingModule, shared_module_1.SharedModule],
            declarations: [workshops_component_1.WorkshopsComponent, workshop_component_1.WorkshopComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA],
            entryComponents: []
        })
    ], WorkshopsModule);
    return WorkshopsModule;
}());
exports.WorkshopsModule = WorkshopsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3Nob3BzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndvcmtzaG9wcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLHlEQUF1RDtBQUN2RCwrRUFBNkU7QUFDN0UsdUVBQW9FO0FBQ3BFLDZEQUEyRDtBQVMzRDtJQUFBO0lBQThCLENBQUM7SUFBbEIsZUFBZTtRQU4zQixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsRUFBRSxpREFBc0IsRUFBRSw0QkFBWSxDQUFDO1lBQ3pFLFlBQVksRUFBRSxDQUFDLHdDQUFrQixFQUFFLHNDQUFpQixDQUFDO1lBQ3JELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1lBQzNCLGVBQWUsRUFBRSxFQUFFO1NBQ3BCLENBQUM7T0FDVyxlQUFlLENBQUc7SUFBRCxzQkFBQztDQUFBLEFBQS9CLElBQStCO0FBQWxCLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBXb3Jrc2hvcENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvd29ya3Nob3Avd29ya3Nob3AuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFdvcmtzaG9wc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi93b3Jrc2hvcHMtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgV29ya3Nob3BzQ29tcG9uZW50IH0gZnJvbSBcIi4vd29ya3Nob3BzLmNvbXBvbmVudFwiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSwgV29ya3Nob3BzUm91dGluZ01vZHVsZSwgU2hhcmVkTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtXb3Jrc2hvcHNDb21wb25lbnQsIFdvcmtzaG9wQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV29ya3Nob3BzTW9kdWxlIHt9XHJcbiJdfQ==