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
            templateUrl: "./speakers-list.component.html"
        }),
        __metadata("design:paramtypes", [contentful_service_1.ContentfulService])
    ], SpeakersListComponent);
    return SpeakersListComponent;
}());
exports.SpeakersListComponent = SpeakersListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYWtlcnMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVha2Vycy1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCx3RUFBc0U7QUFRdEU7SUFJSSwrQkFBb0IsVUFBNkI7UUFBN0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0MscURBQXFEO0lBQ3pELENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBVlEscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGdDQUFnQztTQUNoRCxDQUFDO3lDQUtrQyxzQ0FBaUI7T0FKeEMscUJBQXFCLENBWWpDO0lBQUQsNEJBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBTcGVha2VyIH0gZnJvbSBcIn4vYXBwL21vZGVscy9zcGVha2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IENvbnRlbnRmdWxTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2NvbnRlbnRmdWwuc2VydmljZVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiU3BlYWtlcnNMaXN0XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zcGVha2Vycy1saXN0LmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFNwZWFrZXJzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgc3BlYWtlcnMkOiBPYnNlcnZhYmxlPEFycmF5PFNwZWFrZXI+PjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRlbnRmdWw6IENvbnRlbnRmdWxTZXJ2aWNlKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNwZWFrZXJzJCA9IHRoaXMuY29udGVudGZ1bC5nZXRTcGVha2VycygxMDApO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=