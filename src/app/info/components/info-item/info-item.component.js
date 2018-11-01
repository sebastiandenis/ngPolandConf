"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils = require("tns-core-modules/utils/utils");
var info_item_model_1 = require("~/app/models/info-item.model");
var InfoItemComponent = /** @class */ (function () {
    function InfoItemComponent() {
        // constructor here
    }
    InfoItemComponent.prototype.onLinkTap = function () {
        if (this.item.urlLink) {
            utils.openUrl(this.item.urlLink);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", info_item_model_1.InfoItem)
    ], InfoItemComponent.prototype, "item", void 0);
    InfoItemComponent = __decorate([
        core_1.Component({
            selector: "InfoItem",
            moduleId: module.id,
            templateUrl: "./info-item.component.html",
            styleUrls: ["./info-item.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], InfoItemComponent);
    return InfoItemComponent;
}());
exports.InfoItemComponent = InfoItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZm8taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFDakQsb0RBQXNEO0FBQ3RELGdFQUF3RDtBQVF4RDtJQUlFO1FBQ0UsbUJBQW1CO0lBQ3JCLENBQUM7SUFFRCxxQ0FBUyxHQUFUO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQztJQVZEO1FBREMsWUFBSyxFQUFFO2tDQUNGLDBCQUFRO21EQUFDO0lBRkosaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN6QyxDQUFDOztPQUNXLGlCQUFpQixDQWE3QjtJQUFELHdCQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCB7IEluZm9JdGVtIH0gZnJvbSBcIn4vYXBwL21vZGVscy9pbmZvLWl0ZW0ubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIkluZm9JdGVtXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL2luZm8taXRlbS5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9pbmZvLWl0ZW0uY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5mb0l0ZW1Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpXHJcbiAgaXRlbTogSW5mb0l0ZW07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gY29uc3RydWN0b3IgaGVyZVxyXG4gIH1cclxuXHJcbiAgb25MaW5rVGFwKCkge1xyXG4gICAgaWYgKHRoaXMuaXRlbS51cmxMaW5rKSB7XHJcbiAgICAgIHV0aWxzLm9wZW5VcmwodGhpcy5pdGVtLnVybExpbmspO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=