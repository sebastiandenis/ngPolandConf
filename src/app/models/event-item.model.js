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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtaXRlbS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV2ZW50LWl0ZW0ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFhQTtJQUNFLG1CQUNTLEtBQWEsRUFDYixJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsZ0JBQXdCLEVBQ3hCLFdBQW1CLEVBQ25CLFNBQWlCLEVBQ2pCLE9BQWUsRUFDZixTQUFrQjtRQVBsQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFRO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGNBQVMsR0FBVCxTQUFTLENBQVM7SUFDeEIsQ0FBQztJQUVKLG9DQUFnQixHQUFoQjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBTSxLQUFLLEdBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdDLElBQU0sR0FBRyxHQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QyxJQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRWpELE1BQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUM7SUFDSCxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDO0FBdkJZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3BlYWtlciB9IGZyb20gXCIuL3NwZWFrZXIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50SXRlbSB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgY2F0ZWdvcnk6IHN0cmluZztcclxuICBzaG9ydERlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gIHN0YXJ0RGF0ZT86IHN0cmluZztcclxuICBlbmREYXRlPzogc3RyaW5nO1xyXG4gIHByZXNlbnRlcj86IFNwZWFrZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudEl0ZW0gaW1wbGVtZW50cyBJRXZlbnRJdGVtIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nLFxyXG4gICAgcHVibGljIHR5cGU6IHN0cmluZyxcclxuICAgIHB1YmxpYyBjYXRlZ29yeTogc3RyaW5nLFxyXG4gICAgcHVibGljIHNob3J0RGVzY3JpcHRpb246IHN0cmluZyxcclxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gICAgcHVibGljIHN0YXJ0RGF0ZTogc3RyaW5nLFxyXG4gICAgcHVibGljIGVuZERhdGU6IHN0cmluZyxcclxuICAgIHB1YmxpYyBwcmVzZW50ZXI6IFNwZWFrZXJcclxuICApIHt9XHJcblxyXG4gIGdldEV2ZW50RHVyYXRpb24oKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLnN0YXJ0RGF0ZSAmJiB0aGlzLmVuZERhdGUpIHtcclxuICAgICAgY29uc3Qgc3RhcnQ6IERhdGUgPSBuZXcgRGF0ZSh0aGlzLnN0YXJ0RGF0ZSk7XHJcbiAgICAgIGNvbnN0IGVuZDogRGF0ZSA9IG5ldyBEYXRlKHRoaXMuZW5kRGF0ZSk7XHJcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gZW5kLnZhbHVlT2YoKSAtIHN0YXJ0LnZhbHVlT2YoKTtcclxuXHJcbiAgICAgIHJldHVybiAoZHVyYXRpb24gLyAxMDAwKSAvIDYwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==