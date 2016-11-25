define(function (require, exports, module) {
    var oneCC = function () {
        this.init();
    };
    var oneCCRoute = Backbone.Router.extend({
        routes: {
            "": "home",//默认加载
            "occ/*path": "loadMod"//业务模块加载
        },
        home: function () {

        },

        loadMod: function (path) {
            var key = _.last(path.split("/"));
            var contentId = ".content-wrapper >.content"; //默认加载容器
            var htmlPath = window.basePath + "/entry/" + key + ".html";
            var cssPath = "";
            var jsPathData = {
                path: window.basePath + "/" + path,
                key: key,
                cnd: ""
            };
            window.App.util.loadModForPath(contentId, cssPath, htmlPath, jsPathData);

        }
    });

    oneCC.prototype.init = function () {
        oneCC["route"] = new oneCCRoute();
    };
    module.exports = oneCC;
});