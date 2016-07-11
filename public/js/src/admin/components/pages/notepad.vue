<style>

</style>

<template>
    <div class="block-header">
        <h2>{{ title }}<small>说明:</small></h2>

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

    <div class="row">
        
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            title: '记事本'
        }
    },
    methods: {
        post: function() {
            var self = this;
            var info = $('.wp-text').val()
            self.$http.post('api/notepad/info', { info: info }, function (data, status, request) {
                self.loadPostList();
            }).error(function (data, status, request) {

            })
        },
        formatDate: function(date) {
            return moment(date).format('YYYY-MM-DD HH:mm:ss')
        },
        loadPostList: function() {
            var self = this;
            self.$http.post('api/notepad/list', function (data, status, request) {
                self.$set('posts', data)
            }).error(function (data, status, request) {

            })
        }
    },
    components: {

    },
    ready: function() {
        var self = this;
        //self.loadPostList();
    }
}
</script>
