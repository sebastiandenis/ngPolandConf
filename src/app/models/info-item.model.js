"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InfoItemIcon;
(function (InfoItemIcon) {
    InfoItemIcon[InfoItemIcon["WORKSHOPS"] = 62972] = "WORKSHOPS";
    InfoItemIcon[InfoItemIcon["FOOD"] = 62183] = "FOOD";
    InfoItemIcon[InfoItemIcon["TICKETS"] = 62463] = "TICKETS";
    InfoItemIcon[InfoItemIcon["CONTACT"] = 61557] = "CONTACT";
    InfoItemIcon[InfoItemIcon["LOCATION"] = 62405] = "LOCATION";
})(InfoItemIcon = exports.InfoItemIcon || (exports.InfoItemIcon = {}));
var InfoItem = /** @class */ (function () {
    function InfoItem(title, order, iconName, description, urlLink) {
        this.title = title;
        this.order = order;
        this.description = description;
        this.urlLink = urlLink;
        this.icon = this.resolveIcon(iconName);
    }
    InfoItem.prototype.resolveIcon = function (icon) {
        switch (icon.toLowerCase()) {
            case "workshops":
                return String.fromCharCode(InfoItemIcon.WORKSHOPS);
            case "food":
                return String.fromCharCode(InfoItemIcon.FOOD);
            case "tickets":
                return String.fromCharCode(InfoItemIcon.TICKETS);
            case "contact":
                return String.fromCharCode(InfoItemIcon.CONTACT);
            case "location":
                return String.fromCharCode(InfoItemIcon.LOCATION);
            default:
                return "";
        }
    };
    return InfoItem;
}());
exports.InfoItem = InfoItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1pdGVtLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5mby1pdGVtLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUEsSUFBWSxZQU1YO0FBTkQsV0FBWSxZQUFZO0lBQ3RCLDZEQUFrQixDQUFBO0lBQ2xCLG1EQUFhLENBQUE7SUFDYix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtJQUNoQiwyREFBaUIsQ0FBQTtBQUNuQixDQUFDLEVBTlcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFNdkI7QUFFRDtJQUVFLGtCQUNTLEtBQWEsRUFDYixLQUFhLEVBQ3BCLFFBQWdCLEVBQ1QsV0FBbUIsRUFDbkIsT0FBZ0I7UUFKaEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLFVBQUssR0FBTCxLQUFLLENBQVE7UUFFYixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBRXZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU8sOEJBQVcsR0FBbkIsVUFBb0IsSUFBWTtRQUM5QixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNCLEtBQUssV0FBVztnQkFDZCxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckQsS0FBSyxNQUFNO2dCQUNULE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRCxLQUFLLFNBQVM7Z0JBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25ELEtBQUssU0FBUztnQkFDWixNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakQsS0FBSyxVQUFVO2dCQUNmLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRDtnQkFDRSxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQTVCRCxJQTRCQztBQTVCWSw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSUluZm9JdGVtTW9kZWwge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgb3JkZXI6IHN0cmluZztcclxuICBpY29uOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICB1cmxMaW5rPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBJbmZvSXRlbUljb24ge1xyXG4gIFdPUktTSE9QUyA9IDB4ZjVmYyxcclxuICBGT09EID0gMHhmMmU3LFxyXG4gIFRJQ0tFVFMgPSAweGYzZmYsXHJcbiAgQ09OVEFDVCA9IDB4ZjA3NSxcclxuICBMT0NBVElPTiA9IDB4ZjNjNVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW5mb0l0ZW0gaW1wbGVtZW50cyBJSW5mb0l0ZW1Nb2RlbCB7XHJcbiAgaWNvbjogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgb3JkZXI6IHN0cmluZyxcclxuICAgIGljb25OYW1lOiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyxcclxuICAgIHB1YmxpYyB1cmxMaW5rPzogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICB0aGlzLmljb24gPSB0aGlzLnJlc29sdmVJY29uKGljb25OYW1lKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzb2x2ZUljb24oaWNvbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAoaWNvbi50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgIGNhc2UgXCJ3b3Jrc2hvcHNcIjpcclxuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShJbmZvSXRlbUljb24uV09SS1NIT1BTKTtcclxuICAgICAgY2FzZSBcImZvb2RcIjpcclxuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShJbmZvSXRlbUljb24uRk9PRCk7XHJcbiAgICAgIGNhc2UgXCJ0aWNrZXRzXCI6XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoSW5mb0l0ZW1JY29uLlRJQ0tFVFMpO1xyXG4gICAgICBjYXNlIFwiY29udGFjdFwiOlxyXG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKEluZm9JdGVtSWNvbi5DT05UQUNUKTtcclxuICAgICAgICBjYXNlIFwibG9jYXRpb25cIjpcclxuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShJbmZvSXRlbUljb24uTE9DQVRJT04pO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=