"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("tns-core-modules/ui/dialogs");
var ErrorService = /** @class */ (function () {
    function ErrorService() {
        this.isDialogBoxShown = false;
        this.howManyTimes = 0;
    }
    ErrorService.prototype.resetCounter = function () {
        this.howManyTimes = 0;
    };
    ErrorService.prototype.showNoConnectionDlg = function () {
        var _this = this;
        if (!this.isDialogBoxShown) {
            this.isDialogBoxShown = true;
            this.howManyTimes++;
            var dlgTitle = "Connection error";
            var dlgMessage = "";
            var dlgOkButtonText = "Ok";
            switch (this.howManyTimes) {
                case 1:
                    dlgMessage =
                        "Very slow or no Internet connection. \n\n" +
                            "Make sure Wi-Fi or cellular data is turned on.\n\n" +
                            "I will keep trying, wish me good luck!";
                    break;
                case 2:
                    dlgMessage = "Still can't connect :(";
                    dlgOkButtonText = ":/";
                    break;
                case 3:
                    dlgMessage = "I'm trying again, maybe this time it will work :/";
                    dlgOkButtonText = "I still have hope";
                    break;
                case 4:
                    dlgMessage = "Never give up, great things take time!";
                    dlgOkButtonText = "Yes, I know";
                    break;
                case 5:
                    dlgMessage =
                        "I'm trying, but you at that time, you can do something. Introduce yourself to a first random person.\n\n" +
                            "You can always say that the application asked you to do it.";
                    dlgOkButtonText = "Good idea";
                    break;
                default:
                    dlgMessage =
                        "Very slow or no Internet connection. \n" +
                            "Make sure Wi-Fi or cellular data is turned on.\n" +
                            "I will keep trying, wish me good luck!";
                    this.howManyTimes = 0;
            }
            dialogs
                .alert({
                title: dlgTitle,
                message: dlgMessage,
                okButtonText: dlgOkButtonText
            })
                .then(function () {
                _this.isDialogBoxShown = false;
            });
        }
    };
    ErrorService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], ErrorService);
    return ErrorService;
}());
exports.ErrorService = ErrorService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVycm9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MscURBQXVEO0FBS3ZEO0lBSEE7UUFJVSxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsaUJBQVksR0FBRyxDQUFDLENBQUM7SUEwRDNCLENBQUM7SUF4REMsbUNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCwwQ0FBbUIsR0FBbkI7UUFBQSxpQkFtREM7UUFsREMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFDN0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQU0sUUFBUSxHQUFHLGtCQUFrQixDQUFDO1lBQ3BDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUNwQixJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFFM0IsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLEtBQUssQ0FBQztvQkFDSixVQUFVO3dCQUNSLDJDQUEyQzs0QkFDM0Msb0RBQW9EOzRCQUNwRCx3Q0FBd0MsQ0FBQztvQkFDM0MsS0FBSyxDQUFDO2dCQUNSLEtBQUssQ0FBQztvQkFDSixVQUFVLEdBQUcsd0JBQXdCLENBQUM7b0JBQ3RDLGVBQWUsR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLEtBQUssQ0FBQztnQkFDUixLQUFLLENBQUM7b0JBQ0osVUFBVSxHQUFHLG1EQUFtRCxDQUFDO29CQUNqRSxlQUFlLEdBQUcsbUJBQW1CLENBQUM7b0JBQ3RDLEtBQUssQ0FBQztnQkFDUixLQUFLLENBQUM7b0JBQ0osVUFBVSxHQUFHLHdDQUF3QyxDQUFDO29CQUN0RCxlQUFlLEdBQUcsYUFBYSxDQUFDO29CQUNoQyxLQUFLLENBQUM7Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFVBQVU7d0JBQ1IsMEdBQTBHOzRCQUMxRyw2REFBNkQsQ0FBQztvQkFDaEUsZUFBZSxHQUFHLFdBQVcsQ0FBQztvQkFDOUIsS0FBSyxDQUFDO2dCQUNSO29CQUNFLFVBQVU7d0JBQ1IseUNBQXlDOzRCQUN6QyxrREFBa0Q7NEJBQ2xELHdDQUF3QyxDQUFDO29CQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUMxQixDQUFDO1lBRUQsT0FBTztpQkFDSixLQUFLLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLFlBQVksRUFBRSxlQUFlO2FBQzlCLENBQUM7aUJBQ0QsSUFBSSxDQUFDO2dCQUNKLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0gsQ0FBQztJQTNEVSxZQUFZO1FBSHhCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csWUFBWSxDQTREeEI7SUFBRCxtQkFBQztDQUFBLEFBNURELElBNERDO0FBNURZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXJyb3JTZXJ2aWNlIHtcclxuICBwcml2YXRlIGlzRGlhbG9nQm94U2hvd24gPSBmYWxzZTtcclxuICBwcml2YXRlIGhvd01hbnlUaW1lcyA9IDA7XHJcblxyXG4gIHJlc2V0Q291bnRlcigpOiB2b2lkIHtcclxuICAgIHRoaXMuaG93TWFueVRpbWVzID0gMDtcclxuICB9XHJcbiAgXHJcbiAgc2hvd05vQ29ubmVjdGlvbkRsZygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0RpYWxvZ0JveFNob3duKSB7XHJcbiAgICAgIHRoaXMuaXNEaWFsb2dCb3hTaG93biA9IHRydWU7XHJcbiAgICAgIHRoaXMuaG93TWFueVRpbWVzKys7XHJcbiAgICAgIGNvbnN0IGRsZ1RpdGxlID0gXCJDb25uZWN0aW9uIGVycm9yXCI7XHJcbiAgICAgIGxldCBkbGdNZXNzYWdlID0gXCJcIjtcclxuICAgICAgbGV0IGRsZ09rQnV0dG9uVGV4dCA9IFwiT2tcIjtcclxuXHJcbiAgICAgIHN3aXRjaCAodGhpcy5ob3dNYW55VGltZXMpIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICBkbGdNZXNzYWdlID1cclxuICAgICAgICAgICAgXCJWZXJ5IHNsb3cgb3Igbm8gSW50ZXJuZXQgY29ubmVjdGlvbi4gXFxuXFxuXCIgK1xyXG4gICAgICAgICAgICBcIk1ha2Ugc3VyZSBXaS1GaSBvciBjZWxsdWxhciBkYXRhIGlzIHR1cm5lZCBvbi5cXG5cXG5cIiArXHJcbiAgICAgICAgICAgIFwiSSB3aWxsIGtlZXAgdHJ5aW5nLCB3aXNoIG1lIGdvb2QgbHVjayFcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIGRsZ01lc3NhZ2UgPSBcIlN0aWxsIGNhbid0IGNvbm5lY3QgOihcIjtcclxuICAgICAgICAgIGRsZ09rQnV0dG9uVGV4dCA9IFwiOi9cIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgIGRsZ01lc3NhZ2UgPSBcIkknbSB0cnlpbmcgYWdhaW4sIG1heWJlIHRoaXMgdGltZSBpdCB3aWxsIHdvcmsgOi9cIjtcclxuICAgICAgICAgIGRsZ09rQnV0dG9uVGV4dCA9IFwiSSBzdGlsbCBoYXZlIGhvcGVcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgIGRsZ01lc3NhZ2UgPSBcIk5ldmVyIGdpdmUgdXAsIGdyZWF0IHRoaW5ncyB0YWtlIHRpbWUhXCI7XHJcbiAgICAgICAgICBkbGdPa0J1dHRvblRleHQgPSBcIlllcywgSSBrbm93XCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICBkbGdNZXNzYWdlID1cclxuICAgICAgICAgICAgXCJJJ20gdHJ5aW5nLCBidXQgeW91IGF0IHRoYXQgdGltZSwgeW91IGNhbiBkbyBzb21ldGhpbmcuIEludHJvZHVjZSB5b3Vyc2VsZiB0byBhIGZpcnN0IHJhbmRvbSBwZXJzb24uXFxuXFxuXCIgK1xyXG4gICAgICAgICAgICBcIllvdSBjYW4gYWx3YXlzIHNheSB0aGF0IHRoZSBhcHBsaWNhdGlvbiBhc2tlZCB5b3UgdG8gZG8gaXQuXCI7XHJcbiAgICAgICAgICBkbGdPa0J1dHRvblRleHQgPSBcIkdvb2QgaWRlYVwiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGRsZ01lc3NhZ2UgPVxyXG4gICAgICAgICAgICBcIlZlcnkgc2xvdyBvciBubyBJbnRlcm5ldCBjb25uZWN0aW9uLiBcXG5cIiArXHJcbiAgICAgICAgICAgIFwiTWFrZSBzdXJlIFdpLUZpIG9yIGNlbGx1bGFyIGRhdGEgaXMgdHVybmVkIG9uLlxcblwiICtcclxuICAgICAgICAgICAgXCJJIHdpbGwga2VlcCB0cnlpbmcsIHdpc2ggbWUgZ29vZCBsdWNrIVwiO1xyXG4gICAgICAgICAgdGhpcy5ob3dNYW55VGltZXMgPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkaWFsb2dzXHJcbiAgICAgICAgLmFsZXJ0KHtcclxuICAgICAgICAgIHRpdGxlOiBkbGdUaXRsZSxcclxuICAgICAgICAgIG1lc3NhZ2U6IGRsZ01lc3NhZ2UsXHJcbiAgICAgICAgICBva0J1dHRvblRleHQ6IGRsZ09rQnV0dG9uVGV4dFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc0RpYWxvZ0JveFNob3duID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==