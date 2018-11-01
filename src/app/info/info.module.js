"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var md_to_html_pipe_1 = require("../pipes/md-to-html.pipe");
var info_item_component_1 = require("./components/info-item/info-item.component");
var info_routing_module_1 = require("./info-routing.module");
var info_component_1 = require("./info.component");
var InfoModule = /** @class */ (function () {
    function InfoModule() {
    }
    InfoModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                info_routing_module_1.InfoRoutingModule
            ],
            declarations: [
                info_component_1.InfoComponent, info_item_component_1.InfoItemComponent, md_to_html_pipe_1.MdToHtmlPipe
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], InfoModule);
    return InfoModule;
}());
exports.InfoModule = InfoModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmZvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsNERBQXdEO0FBQ3hELGtGQUErRTtBQUMvRSw2REFBMEQ7QUFDMUQsbURBQWlEO0FBY2pEO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFadEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsdUNBQWlCO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDhCQUFhLEVBQUUsdUNBQWlCLEVBQUUsOEJBQVk7YUFDakQ7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgTWRUb0h0bWxQaXBlIH0gZnJvbSBcIi4uL3BpcGVzL21kLXRvLWh0bWwucGlwZVwiO1xyXG5pbXBvcnQgeyBJbmZvSXRlbUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaW5mby1pdGVtL2luZm8taXRlbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSW5mb1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9pbmZvLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEluZm9Db21wb25lbnQgfSBmcm9tIFwiLi9pbmZvLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgSW5mb1JvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBJbmZvQ29tcG9uZW50LCBJbmZvSXRlbUNvbXBvbmVudCwgTWRUb0h0bWxQaXBlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEluZm9Nb2R1bGUgeyB9XHJcbiJdfQ==