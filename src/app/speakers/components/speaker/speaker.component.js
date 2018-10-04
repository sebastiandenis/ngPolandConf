"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var speaker_model_1 = require("~/app/models/speaker.model");
var SpeakerComponent = /** @class */ (function () {
    function SpeakerComponent() {
        // Use the component constructor to inject providers.
    }
    SpeakerComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", speaker_model_1.Speaker)
    ], SpeakerComponent.prototype, "speaker", void 0);
    SpeakerComponent = __decorate([
        core_1.Component({
            selector: "Speaker",
            moduleId: module.id,
            templateUrl: "./speaker.component.html",
            styleUrls: ["./speaker.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], SpeakerComponent);
    return SpeakerComponent;
}());
exports.SpeakerComponent = SpeakerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYWtlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVha2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCw0REFBcUQ7QUFRckQ7SUFLSTtRQUNJLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBUkQ7UUFEQyxZQUFLLEVBQUU7a0NBQ0MsdUJBQU87cURBQUM7SUFIUixnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3pDLENBQUM7O09BQ1csZ0JBQWdCLENBYTVCO0lBQUQsdUJBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTcGVha2VyIH0gZnJvbSBcIn4vYXBwL21vZGVscy9zcGVha2VyLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlNwZWFrZXJcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NwZWFrZXIuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9zcGVha2VyLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNwZWFrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzcGVha2VyOiBTcGVha2VyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==