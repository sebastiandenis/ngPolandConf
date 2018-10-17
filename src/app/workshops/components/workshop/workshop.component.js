"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var workshop_model_1 = require("~/app/models/workshop.model");
var WorkshopComponent = /** @class */ (function () {
    function WorkshopComponent() {
        // Use the component constructor to inject providers.
    }
    WorkshopComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(),
        __metadata("design:type", workshop_model_1.Workshop)
    ], WorkshopComponent.prototype, "workshop", void 0);
    WorkshopComponent = __decorate([
        core_1.Component({
            selector: "Workshop",
            moduleId: module.id,
            templateUrl: "./workshop.component.html",
            styleUrls: ["./workshop.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], WorkshopComponent);
    return WorkshopComponent;
}());
exports.WorkshopComponent = WorkshopComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3Nob3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29ya3Nob3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDhEQUF1RDtBQVF2RDtJQUlFO1FBQ0UscURBQXFEO0lBQ3ZELENBQUM7SUFFRCxvQ0FBUSxHQUFSLGNBQWtCLENBQUM7SUFObkI7UUFEQyxZQUFLLEVBQUU7a0NBQ0UseUJBQVE7dURBQUM7SUFGUixpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7O09BQ1csaUJBQWlCLENBUzdCO0lBQUQsd0JBQUM7Q0FBQSxBQVRELElBU0M7QUFUWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBXb3Jrc2hvcCB9IGZyb20gXCJ+L2FwcC9tb2RlbHMvd29ya3Nob3AubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIldvcmtzaG9wXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL3dvcmtzaG9wLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL3dvcmtzaG9wLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdvcmtzaG9wQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIHdvcmtzaG9wOiBXb3Jrc2hvcDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==