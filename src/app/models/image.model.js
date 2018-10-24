"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Image = /** @class */ (function () {
    function Image(imgUrl, imgTitle, imgDesc) {
        this.imgUrl = imgUrl;
        this.imgTitle = imgTitle;
        this.imgDesc = imgDesc;
    }
    Image.prototype.getImageUrl = function () {
        if (this.imgUrl) {
            return "https:" + this.imgUrl;
        }
        else {
            return "";
        }
    };
    return Image;
}());
exports.Image = Image;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU1BO0lBQ0UsZUFDUyxNQUFjLEVBQ2QsUUFBZ0IsRUFDaEIsT0FBZ0I7UUFGaEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUN0QixDQUFDO0lBRUosMkJBQVcsR0FBWDtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ1osQ0FBQztJQUNILENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSUltYWdlIHtcbiAgaW1nVXJsOiBzdHJpbmc7XG4gIGltZ1RpdGxlOiBzdHJpbmc7XG4gIGltZ0Rlc2M/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZSBpbXBsZW1lbnRzIElJbWFnZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpbWdVcmw6IHN0cmluZyxcbiAgICBwdWJsaWMgaW1nVGl0bGU6IHN0cmluZyxcbiAgICBwdWJsaWMgaW1nRGVzYz86IHN0cmluZ1xuICApIHt9XG5cbiAgZ2V0SW1hZ2VVcmwoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5pbWdVcmwpIHtcbiAgICAgIHJldHVybiBcImh0dHBzOlwiICsgdGhpcy5pbWdVcmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfVxufVxuIl19