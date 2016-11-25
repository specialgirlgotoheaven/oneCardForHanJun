/**
 * Created by lisanchuan on 2016/11/22.
 */
define([window.basePath + "/dep/datatables/jquery.dataTables.js", window.basePath + "/dep/datatables/dataTables.bootstrap.js"], function (require, exports, module) {

    var biz2 = Backbone.View.extend({
        el: "#biz2",
        initialize: function () {
            require(window.basePath + "/dep/datatables/jquery.dataTables");

            require(window.basePath + "/dep/datatables/dataTables.bootstrap");
            console.log("=======================我已经加载了")
            $('#example1').DataTable({
                "paging": true,
                "lengthChange": false,
                "searching": false,
                "ordering": true,
                "info": true,
                "autoWidth": false,
                "dom": '<"toolbar">frtip'
            });

            $("div.toolbar").html('<a class="btn btn-xs"> <i class="fa fa-edit"></i> Edit</a>');
        }
    });
    module.exports = biz2;
});