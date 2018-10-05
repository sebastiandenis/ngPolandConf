"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("tns-core-modules/color");
var content_view_1 = require("tns-core-modules/ui/content-view");
var view_1 = require("tns-core-modules/ui/core/view");
exports.backgroundColorProperty = view_1.backgroundColorProperty;
exports.backgroundInternalProperty = view_1.backgroundInternalProperty;
var CardViewCommon = (function (_super) {
    __extends(CardViewCommon, _super);
    function CardViewCommon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CardViewCommon;
}(content_view_1.ContentView));
exports.CardViewCommon = CardViewCommon;
exports.radiusProperty = new content_view_1.Property({
    name: 'radius',
    valueConverter: function (value) { return +value; }
});
exports.radiusProperty.register(CardViewCommon);
exports.elevationProperty = new content_view_1.Property({
    name: 'elevation',
    valueConverter: function (value) { return +value; }
});
exports.elevationProperty.register(CardViewCommon);
exports.rippleProperty = new content_view_1.Property({
    name: 'ripple',
    valueConverter: function (value) { return value === 'true'; }
});
exports.rippleProperty.register(CardViewCommon);
exports.shadowRadiusProperty = new content_view_1.Property({
    name: 'shadowRadius',
    valueConverter: function (value) { return +value; }
});
exports.shadowRadiusProperty.register(CardViewCommon);
exports.shadowOffsetWidthProperty = new content_view_1.Property({
    name: 'shadowOffsetWidth',
    valueConverter: function (value) { return +value; }
});
exports.shadowOffsetWidthProperty.register(CardViewCommon);
exports.shadowOffsetHeightProperty = new content_view_1.Property({
    name: 'shadowOffsetHeight',
    valueConverter: function (value) { return +value; }
});
exports.shadowOffsetHeightProperty.register(CardViewCommon);
exports.shadowColorProperty = new content_view_1.Property({
    name: 'shadowColor',
    valueConverter: function (value) { return new color_1.Color(value); }
});
exports.shadowColorProperty.register(CardViewCommon);
exports.shadowOpacityProperty = new content_view_1.Property({
    name: 'shadowOpacity',
    valueConverter: function (value) { return +value; }
});
exports.shadowOpacityProperty.register(CardViewCommon);
//# sourceMappingURL=cardview-common.js.map