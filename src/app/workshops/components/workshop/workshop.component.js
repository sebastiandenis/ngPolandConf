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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3Nob3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29ya3Nob3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDhEQUF1RDtBQVF2RDtJQUlFO1FBQ0UscURBQXFEO0lBQ3ZELENBQUM7SUFFRCxvQ0FBUSxHQUFSLGNBQWtCLENBQUM7SUFObkI7UUFEQyxZQUFLLEVBQUU7a0NBQ0UseUJBQVE7dURBQUM7SUFGUixpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7O09BQ1csaUJBQWlCLENBUzdCO0lBQUQsd0JBQUM7Q0FBQSxBQVRELElBU0M7QUFUWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgV29ya3Nob3AgfSBmcm9tIFwifi9hcHAvbW9kZWxzL3dvcmtzaG9wLm1vZGVsXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJXb3Jrc2hvcFwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL3dvcmtzaG9wLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi93b3Jrc2hvcC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFdvcmtzaG9wQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgd29ya3Nob3A6IFdvcmtzaG9wO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG59XG4iXX0=