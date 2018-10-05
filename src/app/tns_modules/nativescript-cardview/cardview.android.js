"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("tns-core-modules/application");
var color_1 = require("tns-core-modules/color");
var cardview_common_1 = require("./cardview-common");
var CardView = (function (_super) {
    __extends(CardView, _super);
    function CardView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CardView.prototype, "android", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    CardView.prototype[cardview_common_1.radiusProperty.setNative] = function (value) {
        this.nativeView.setRadius(value);
    };
    CardView.prototype[cardview_common_1.elevationProperty.setNative] = function (value) {
        this.nativeView.setCardElevation(value);
    };
    CardView.prototype[cardview_common_1.rippleProperty.setNative] = function (value) {
        if (!value) {
            this.nativeView.setClickable(false);
        }
        else {
            var attr = java.lang.Class.forName('android.support.v7.appcompat.R$attr');
            var field = attr.getField('selectableItemBackground');
            if (field && android.os.Build.VERSION.SDK_INT >= 23) {
                var resId = field.getInt(null);
                var attrs = Array.create('int', 1);
                attrs[0] = resId;
                var activity = application.android.foregroundActivity;
                var typedValue = activity.obtainStyledAttributes(attrs);
                var selectedItemDrawable = typedValue.getDrawable(0);
                this.nativeView.setForeground(selectedItemDrawable);
                this.nativeView.setClickable(true);
            }
        }
    };
    CardView.prototype.createNativeView = function () {
        return new android.support.v7.widget.CardView(this._context);
    };
    CardView.prototype.initNativeView = function () {
        this._androidViewId = android.view.View.generateViewId();
        this.nativeView.setId(this._androidViewId);
    };
    CardView.prototype[cardview_common_1.backgroundColorProperty.setNative] = function (value) {
        if (value) {
            try {
                this.nativeView.setCardBackgroundColor(value !== undefined ? value.android : new color_1.Color('#FFFFFF').android);
            }
            catch (error) {
                console.log('NativeScript-Cardview --- invalid background-color value ', error);
            }
        }
    };
    CardView.prototype[cardview_common_1.backgroundInternalProperty.setNative] = function (value) {
        if (value) {
            try {
                this.nativeView.setCardBackgroundColor(new color_1.Color(value.color !== undefined ? value.color + '' : '#FFFFFF').android);
            }
            catch (error) {
                console.log('NativeScript-Cardview --- invalid background-color value:', error);
            }
        }
    };
    return CardView;
}(cardview_common_1.CardViewCommon));
exports.CardView = CardView;
//# sourceMappingURL=cardview.android.js.map