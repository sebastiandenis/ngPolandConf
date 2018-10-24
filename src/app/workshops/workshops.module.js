"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var workshop_component_1 = require("./components/workshop/workshop.component");
var workshops_routing_module_1 = require("./workshops-routing.module");
var workshops_component_1 = require("./workshops.component");
var WorkshopsModule = /** @class */ (function () {
    function WorkshopsModule() {
    }
    WorkshopsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.NativeScriptCommonModule, workshops_routing_module_1.WorkshopsRoutingModule],
            declarations: [workshops_component_1.WorkshopsComponent, workshop_component_1.WorkshopComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA],
            entryComponents: []
        })
    ], WorkshopsModule);
    return WorkshopsModule;
}());
exports.WorkshopsModule = WorkshopsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3Nob3BzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndvcmtzaG9wcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLCtFQUE2RTtBQUM3RSx1RUFBb0U7QUFDcEUsNkRBQTJEO0FBUTNEO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixlQUFlO1FBTjNCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixFQUFFLGlEQUFzQixDQUFDO1lBQzNELFlBQVksRUFBRSxDQUFDLHdDQUFrQixFQUFFLHNDQUFpQixDQUFDO1lBQ3JELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1lBQzNCLGVBQWUsRUFBRSxFQUFFO1NBQ3BCLENBQUM7T0FDVyxlQUFlLENBQUc7SUFBRCxzQkFBQztDQUFBLEFBQS9CLElBQStCO0FBQWxCLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgV29ya3Nob3BDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3dvcmtzaG9wL3dvcmtzaG9wLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgV29ya3Nob3BzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3dvcmtzaG9wcy1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgV29ya3Nob3BzQ29tcG9uZW50IH0gZnJvbSBcIi4vd29ya3Nob3BzLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBXb3Jrc2hvcHNSb3V0aW5nTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbV29ya3Nob3BzQ29tcG9uZW50LCBXb3Jrc2hvcENvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBXb3Jrc2hvcHNNb2R1bGUge31cbiJdfQ==