"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var SpeakersComponent = /** @class */ (function () {
    function SpeakersComponent() {
        // Use the component constructor to inject providers.
    }
    SpeakersComponent.prototype.ngOnInit = function () {
    };
    SpeakersComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    SpeakersComponent = __decorate([
        core_1.Component({
            selector: "Speakers",
            moduleId: module.id,
            templateUrl: "./speakers.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], SpeakersComponent);
    return SpeakersComponent;
}());
exports.SpeakersComponent = SpeakersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYWtlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BlYWtlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGlDQUFtQztBQVFuQztJQUdJO1FBQ0kscURBQXFEO0lBQ3pELENBQUM7SUFFRCxvQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELDZDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFkUSxpQkFBaUI7UUFMN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1NBQzNDLENBQUM7O09BQ1csaUJBQWlCLENBZTdCO0lBQUQsd0JBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlNwZWFrZXJzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NwZWFrZXJzLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgU3BlYWtlcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbn1cbiJdfQ==