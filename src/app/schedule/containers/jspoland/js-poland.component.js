"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contentful_service_1 = require("~/app/services/contentful.service");
var JsPolandComponent = /** @class */ (function () {
    function JsPolandComponent(contentful) {
        this.contentful = contentful;
        // Use the component constructor to inject providers.
    }
    JsPolandComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.events$ = this.contentful.getEventItems(100, contentful_service_1.EventItemType.JSPOLAND);
    };
    JsPolandComponent = __decorate([
        core_1.Component({
            selector: "JsPoland",
            moduleId: module.id,
            templateUrl: "./js-poland.component.html",
            styleUrls: ["./js-poland.component.css"]
        }),
        __metadata("design:paramtypes", [contentful_service_1.ContentfulService])
    ], JsPolandComponent);
    return JsPolandComponent;
}());
exports.JsPolandComponent = JsPolandComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMtcG9sYW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImpzLXBvbGFuZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFHbEQsd0VBQXFGO0FBUXJGO0lBSUksMkJBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQy9DLHFEQUFxRDtJQUN2RCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNFLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxrQ0FBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFYUSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQzNDLENBQUM7eUNBS2tDLHNDQUFpQjtPQUp4QyxpQkFBaUIsQ0FZN0I7SUFBRCx3QkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEV2ZW50SXRlbSB9IGZyb20gXCJ+L2FwcC9tb2RlbHMvZXZlbnQtaXRlbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBDb250ZW50ZnVsU2VydmljZSwgRXZlbnRJdGVtVHlwZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9jb250ZW50ZnVsLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSnNQb2xhbmRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2pzLXBvbGFuZC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2pzLXBvbGFuZC5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKc1BvbGFuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgZXZlbnRzJDogT2JzZXJ2YWJsZTxBcnJheTxFdmVudEl0ZW0+PjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRlbnRmdWw6IENvbnRlbnRmdWxTZXJ2aWNlKSB7XHJcbiAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgICB9XHJcbiAgXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICAgIHRoaXMuZXZlbnRzJCA9IHRoaXMuY29udGVudGZ1bC5nZXRFdmVudEl0ZW1zKDEwMCwgRXZlbnRJdGVtVHlwZS5KU1BPTEFORCk7XHJcbiAgICB9XHJcbn1cclxuIl19