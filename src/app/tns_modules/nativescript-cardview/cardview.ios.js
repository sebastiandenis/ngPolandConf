"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("tns-core-modules/color");
var platform_1 = require("tns-core-modules/platform");
var cardview_common_1 = require("./cardview-common");
var CardView = (function (_super) {
    __extends(CardView, _super);
    function CardView() {
        var _this = _super.call(this) || this;
        var width = platform_1.screen.mainScreen.widthDIPs - 20;
        _this.nativeView = new UIView({ frame: CGRectMake(10, 30, width, 0) });
        _this.nativeView.layer.masksToBounds = false;
        _this.shadowColor = 'black';
        _this.radius = 1;
        _this.shadowRadius = 1;
        _this.shadowOpacity = 0.4;
        _this.shadowOffsetHeight = 2;
        _this.shadowOffsetWidth = 0;
        return _this;
    }
    Object.defineProperty(CardView.prototype, "ios", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    CardView.prototype[cardview_common_1.radiusProperty.setNative] = function (value) {
        this.nativeView.layer.cornerRadius = value;
    };
    CardView.prototype[cardview_common_1.radiusProperty.getDefault] = function () {
        return this.nativeView.layer.cornerRadius;
    };
    CardView.prototype[cardview_common_1.backgroundColorProperty.setNative] = function (value) {
        this.nativeView.backgroundColor = value !== undefined ? value.ios : new color_1.Color('#FFFFFF').ios;
    };
    CardView.prototype[cardview_common_1.backgroundInternalProperty.setNative] = function (value) {
        this.nativeView.backgroundColor = new color_1.Color(value.color !== undefined ? value.color + '' : '#FFFFFF').ios;
    };
    CardView.prototype[cardview_common_1.shadowRadiusProperty.setNative] = function (value) {
        this.nativeView.layer.shadowRadius = value;
    };
    CardView.prototype[cardview_common_1.shadowOffsetWidthProperty.setNative] = function (value) {
        this.nativeView.layer.shadowOffset = CGSizeMake(value, this.nativeView.layer.shadowOffset.height);
    };
    CardView.prototype[cardview_common_1.shadowOffsetHeightProperty.setNative] = function (value) {
        this.nativeView.layer.shadowOffset = CGSizeMake(this.nativeView.layer.shadowOffset.width, value);
    };
    CardView.prototype[cardview_common_1.shadowColorProperty.setNative] = function (value) {
        this.nativeView.layer.shadowColor = value.ios.CGColor;
    };
    CardView.prototype[cardview_common_1.shadowOpacityProperty.setNative] = function (value) {
        this.nativeView.layer.shadowOpacity = value;
    };
    return CardView;
}(cardview_common_1.CardViewCommon));
exports.CardView = CardView;
//# sourceMappingURL=cardview.ios.js.map