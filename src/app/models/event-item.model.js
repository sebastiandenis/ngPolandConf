"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventItem = /** @class */ (function () {
    function EventItem(title, type, category, shortDescription, description, startDate, endDate, presenter) {
        this.title = title;
        this.type = type;
        this.category = category;
        this.shortDescription = shortDescription;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.presenter = presenter;
    }
    EventItem.prototype.getEventDuration = function () {
        if (this.startDate && this.endDate) {
            var start = new Date(this.startDate);
            var end = new Date(this.endDate);
            var duration = end.valueOf() - start.valueOf();
            return (duration / 1000) / 60;
        }
        else {
            return 0;
        }
    };
    return EventItem;
}());
exports.EventItem = EventItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtaXRlbS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV2ZW50LWl0ZW0ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFhQTtJQUNFLG1CQUNTLEtBQWEsRUFDYixJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsZ0JBQXdCLEVBQ3hCLFdBQW1CLEVBQ25CLFNBQWlCLEVBQ2pCLE9BQWUsRUFDZixTQUFrQjtRQVBsQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFRO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGNBQVMsR0FBVCxTQUFTLENBQVM7SUFDeEIsQ0FBQztJQUVKLG9DQUFnQixHQUFoQjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBTSxLQUFLLEdBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdDLElBQU0sR0FBRyxHQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QyxJQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRWpELE1BQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUM7SUFDSCxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDO0FBdkJZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3BlYWtlciB9IGZyb20gXCIuL3NwZWFrZXIubW9kZWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnRJdGVtIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICBzaG9ydERlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgc3RhcnREYXRlPzogc3RyaW5nO1xuICBlbmREYXRlPzogc3RyaW5nO1xuICBwcmVzZW50ZXI/OiBTcGVha2VyO1xufVxuXG5leHBvcnQgY2xhc3MgRXZlbnRJdGVtIGltcGxlbWVudHMgSUV2ZW50SXRlbSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nLFxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmcsXG4gICAgcHVibGljIGNhdGVnb3J5OiBzdHJpbmcsXG4gICAgcHVibGljIHNob3J0RGVzY3JpcHRpb246IHN0cmluZyxcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgICBwdWJsaWMgc3RhcnREYXRlOiBzdHJpbmcsXG4gICAgcHVibGljIGVuZERhdGU6IHN0cmluZyxcbiAgICBwdWJsaWMgcHJlc2VudGVyOiBTcGVha2VyXG4gICkge31cblxuICBnZXRFdmVudER1cmF0aW9uKCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuc3RhcnREYXRlICYmIHRoaXMuZW5kRGF0ZSkge1xuICAgICAgY29uc3Qgc3RhcnQ6IERhdGUgPSBuZXcgRGF0ZSh0aGlzLnN0YXJ0RGF0ZSk7XG4gICAgICBjb25zdCBlbmQ6IERhdGUgPSBuZXcgRGF0ZSh0aGlzLmVuZERhdGUpO1xuICAgICAgY29uc3QgZHVyYXRpb24gPSBlbmQudmFsdWVPZigpIC0gc3RhcnQudmFsdWVPZigpO1xuXG4gICAgICByZXR1cm4gKGR1cmF0aW9uIC8gMTAwMCkgLyA2MDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG59XG4iXX0=