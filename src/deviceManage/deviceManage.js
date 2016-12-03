/**
 * Created by weie on 2016/11/29.
 */
define([window.basePath + "/dep/datatables/jquery.dataTables.js", window.basePath + "/dep/datatables/dataTables.bootstrap.js"], function (require, exports, module) {

    //console.log("deviceManage");

/*    var biz2 = Backbone.View.extend({
        el: ".js-deviceManage",
        initialize: function () {
            require(window.basePath + "/dep/datatables/jquery.dataTables");

            require(window.basePath + "/dep/datatables/dataTables.bootstrap");
            console.log("===========deviceManage============我已经加载了")
            $('#example1').DataTable({
                "paging": true,
                "lengthChange": false,
                "searching": false,
                "ordering": true,
                "info": true,
                "autoWidth": false,
                "dom": '<"toolbar">frtip'
            });
            $("div.toolbar").html('<a class="btn btn-xs"><i class="fa fa-edit"></i> Edit</a>');
        }
    });*/
    var deviceManage = Backbone.View.extend({
        el:'.js-deviceManage',/*不能与其他el重复*/


    });
    module.exports = deviceManage;
});