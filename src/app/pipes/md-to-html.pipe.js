"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contentful_service_1 = require("../services/contentful.service");
var MdToHtmlPipe = /** @class */ (function () {
    function MdToHtmlPipe(contentful) {
        this.contentful = contentful;
    }
    MdToHtmlPipe.prototype.transform = function (value) {
        return this.contentful.markdownToHtml(value);
    };
    MdToHtmlPipe = __decorate([
        core_1.Pipe({
            name: "mdToHtml"
        }),
        __metadata("design:paramtypes", [contentful_service_1.ContentfulService])
    ], MdToHtmlPipe);
    return MdToHtmlPipe;
}());
exports.MdToHtmlPipe = MdToHtmlPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWQtdG8taHRtbC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWQtdG8taHRtbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9EO0FBQ3BELHFFQUFtRTtBQUtuRTtJQUNFLHNCQUFvQixVQUE2QjtRQUE3QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtJQUFHLENBQUM7SUFFckQsZ0NBQVMsR0FBVCxVQUFVLEtBQVU7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFMVSxZQUFZO1FBSHhCLFdBQUksQ0FBQztZQUNKLElBQUksRUFBRSxVQUFVO1NBQ2pCLENBQUM7eUNBRWdDLHNDQUFpQjtPQUR0QyxZQUFZLENBTXhCO0lBQUQsbUJBQUM7Q0FBQSxBQU5ELElBTUM7QUFOWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb250ZW50ZnVsU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb250ZW50ZnVsLnNlcnZpY2VcIjtcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiBcIm1kVG9IdG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIE1kVG9IdG1sUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGVudGZ1bDogQ29udGVudGZ1bFNlcnZpY2UpIHt9XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRmdWwubWFya2Rvd25Ub0h0bWwodmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=