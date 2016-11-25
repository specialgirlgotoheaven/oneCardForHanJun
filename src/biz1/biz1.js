/**
 * Created by lisanchuan on 2016/11/22.
 */
define(function (require, exports, module) {
    var biz1 = Backbone.View.extend({
        el: "#biz1",
        initialize: function () {
            console.log("=======================biz1我已经加载了")
        }
    });
    module.exports = biz1;
});