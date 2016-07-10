<style>

</style>

<template>
    <div class="block-header">
        <h2>视频列表<small>说明:</small></h2>

        <ul class="actions">
            <li>
                <a href="index.html">
                    <i class="zmdi zmdi-trending-up"></i>
                </a>
            </li>
            <li>
                <a href="index.html">
                    <i class="zmdi zmdi-check-all"></i>
                </a>
            </li>
            <li class="dropdown">
                <a href="index.html" data-toggle="dropdown">
                    <i class="zmdi zmdi-more-vert"></i>
                </a>

                <ul class="dropdown-menu dropdown-menu-right">
                    <li>
                        <a href="index.html">Refresh</a>
                    </li>
                    <li>
                        <a href="index.html">Manage Widgets</a>
                    </li>
                    <li>
                        <a href="index.html">Widgets Settings</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>

    <div class="card">
        <div class="card-header">
        </div>

        <table id="grid-command-video" class="table table-striped table-vmiddle">
            <thead>
                <tr>
                    <th data-column-id="video_id" data-width="16%" data-type="numeric">视频编号</th>
                    <th data-column-id="video_url" data-width="48%" data-formatter="link" >视频地址</th>
                    <th data-column-id="video_resolution" data-width="10%" data-align="center" data-header-align="center" data-formatter="resolution">分辨率</th>
                    <th data-column-id="video_updated" data-width="16%" data-align="center" data-header-align="center" data-formatter="updated" data-order="desc">更新时间</th>
                    <th data-column-id="commands" data-width="10%" data-align="center" data-header-align="center" data-formatter="commands" data-sortable="false">操作</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            title: ''
        }
    },
    methods: {

    },
    components: {

    },
    ready: function() {
        var grid = $("#grid-command-video").bootgrid({
            ajax: true,
            post: function ()
            {
                return {

                };
            },
            url: "/api/video/list",
            css: {
                icon: 'zmdi icon',
                iconColumns: 'zmdi-view-module',
                iconDown: 'zmdi-expand-more',
                iconRefresh: 'zmdi-refresh',
                iconUp: 'zmdi-expand-less'
            },
            labels: {
                all: "全部",
                infos: "显示 {{ctx.start}} 到 {{ctx.end}} 共 {{ctx.total}} 条数据",
                loading: "加载中...",
                noResults: "没有找到相关数据!",
                refresh: "刷新",
                search: "搜索"
            },
            formatters: {
                resolution: function(column, row) {
                    return row.thumbnail_width + 'x' + row.thumbnail_height
                },
                updated: function(column, row) {
                    return moment(row.date).format('YYYY-MM-DD HH:mm:ss');
                },
                link: function(column, row) {
                    return '<a href="' + row._id + '">' + row._id + '</a>';
                },
                commands: function(column, row) {
                    var str = '';
                    str += '<button type="button" class="btn btn-icon command-edit" data-video-id="' + row.video_id + '" data-row-id="' + row._id + '"><span class="zmdi zmdi-edit"></span></button>'
                    str += '<button type="button" class="btn btn-icon command-delete" data-video-id="' + row.video_id + '" data-row-id="' + row._id + '"><span class="zmdi zmdi-delete"></span></button>'
                    return str;
                }
            }
        }).on('loaded.rs.jquery.bootgrid', function()
        {
            /* Executes after data is loaded and rendered */
            grid.find('.command-edit').on('click', function(e)
            {
                alert('You pressed edit on video id: ' + $(this).data('video-id') + '" video url : "' + $(this).data('row-id'));
            }).end().find(".command-delete").on("click", function(e)
            {
                sweetAlert({
                    title: "您确认要删除?",
                    text: "video id : " + $(this).data("video-id") + "\r\n" + "video url : " + $(this).data("row-id"),
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "是的,我要删除它!",
                    cancelButtonText: "不, 我在想想!",
                    closeOnConfirm: false
                }, function(){
                    swal("已删除!",
                    "Your imaginary file has been deleted.",
                    "success");
                });
            });
        });
    }
}
</script>
