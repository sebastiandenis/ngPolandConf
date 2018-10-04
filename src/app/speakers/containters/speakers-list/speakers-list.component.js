"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contentful_service_1 = require("~/app/services/contentful.service");
var SpeakersListComponent = /** @class */ (function () {
    function SpeakersListComponent(contentful) {
        this.contentful = contentful;
        // Use the component constructor to inject providers.
    }
    SpeakersListComponent.prototype.ngOnInit = function () {
        this.speakers$ = this.contentful.getSpeakers(100);
    };
    SpeakersListComponent = __decorate([
        core_1.Component({
            selector: "SpeakersList",
            moduleId: module.id,
            templateUrl: "./speakers-list.component.html",
            styleUrls: ["./speakers-list.component.css"]
        }),
        __metadata("design:paramtypes", [contentful_service_1.ContentfulService])
    ], SpeakersListComponent);
    return SpeakersListComponent;
}());
exports.SpeakersListComponent = SpeakersListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYWtlcnMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVha2Vycy1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCx3RUFBc0U7QUFTdEU7SUFJSSwrQkFBb0IsVUFBNkI7UUFBN0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0MscURBQXFEO0lBQ3pELENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBVlEscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUMvQyxDQUFDO3lDQUtrQyxzQ0FBaUI7T0FKeEMscUJBQXFCLENBWWpDO0lBQUQsNEJBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBTcGVha2VyIH0gZnJvbSBcIn4vYXBwL21vZGVscy9zcGVha2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IENvbnRlbnRmdWxTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2NvbnRlbnRmdWwuc2VydmljZVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiU3BlYWtlcnNMaXN0XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zcGVha2Vycy1saXN0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vc3BlYWtlcnMtbGlzdC5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcGVha2Vyc0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHNwZWFrZXJzJDogT2JzZXJ2YWJsZTxBcnJheTxTcGVha2VyPj47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250ZW50ZnVsOiBDb250ZW50ZnVsU2VydmljZSkge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGVha2VycyQgPSB0aGlzLmNvbnRlbnRmdWwuZ2V0U3BlYWtlcnMoMTAwKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19