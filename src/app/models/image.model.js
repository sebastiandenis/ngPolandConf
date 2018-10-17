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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU1BO0lBQ0UsZUFDUyxNQUFjLEVBQ2QsUUFBZ0IsRUFDaEIsT0FBZ0I7UUFGaEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUN0QixDQUFDO0lBRUosMkJBQVcsR0FBWDtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ1osQ0FBQztJQUNILENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSUltYWdlIHtcclxuICBpbWdVcmw6IHN0cmluZztcclxuICBpbWdUaXRsZTogc3RyaW5nO1xyXG4gIGltZ0Rlc2M/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZSBpbXBsZW1lbnRzIElJbWFnZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgaW1nVXJsOiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgaW1nVGl0bGU6IHN0cmluZyxcclxuICAgIHB1YmxpYyBpbWdEZXNjPzogc3RyaW5nXHJcbiAgKSB7fVxyXG5cclxuICBnZXRJbWFnZVVybCgpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuaW1nVXJsKSB7XHJcbiAgICAgIHJldHVybiBcImh0dHBzOlwiICsgdGhpcy5pbWdVcmw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19