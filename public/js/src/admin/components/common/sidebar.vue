<style>

</style>

<template>
    <div class="sidebar-inner c-overflow">
        <div class="profile-menu">
            <a href="/">
                <div class="profile-pic">
                    <img :src="user.picture" alt="">
                </div>

                <div class="profile-info">
                    {{ user.full_name }}
                    <i class="zmdi zmdi-arrow-drop-down"></i>
                </div>
            </a>

            <ul class="main-menu">
                <li>
                    <a href="#" rel="rs-dialog" data-target="profile-dialog"><i class="zmdi zmdi-account"></i>个人信息</a>
                </li>
                <li>
                    <a href="#" rel="rs-dialog" data-target="setting-dialog"><i class="zmdi zmdi-settings"></i>全局设置</a>
                </li>
                <li>
                    <a href="#" v-on:click="logout"><i class="zmdi zmdi-time-restore"></i>安全退出</a>
                </li>
            </ul>
        </div>

        <ul class="main-menu">
            <li class="{{ menu.sub ? (menu.open ? 'sub-menu toggled' : 'sub-menu') : (menu.active ? 'active' : '') }}" v-link="{ path: menu.url, activeClass: 'active' }" v-for="menu in menus">
                <a v-link="{ path: menu.url, activeClass: 'active' }"><i class="{{ menu.class }}"></i>{{ menu.title }}</a>
                <ul v-if="menu.sub">
                    <li v-for="sub_menu in menu.menus">
                        <a v-link="{ path: menu.url + sub_menu.url, activeClass: 'active' }">{{ sub_menu.title }}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            menus: [],
            user: {}
        }
    },
    methods: {
        logout: function() {
            swal({
                title: "您确认要退出?",
                text: "You will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "是, 我要退出!",
                cancelButtonText: "不, 我在想想!",
                closeOnConfirm: false
            }, function(isConfirm){
                if(isConfirm){
                    swal({
                        title: "确认退出!",
                        text: "点击确认按钮退出本后台.",
                        type: "success",
                        confirmButtonText: "确认",
                        closeOnConfirm: true
                    }, function(){
                        window.location.href = "logout";
                    });
                }
            });
        },
        loadMenuList: function() {
            this.$http.post('/api/menu/list', function (data, status, request) {
                this.$set('menus', data)
            }).error(function (data, status, request) {

            })
        },
        loadUserInfo: function() {
            this.$http.post('/api/user/info', function (data, status, request) {
                this.$set('user', data)
            }).error(function (data, status, request) {

            })
        }
    },
    components: {

    },
    ready: function() {
        var self = this;
        self.loadUserInfo();
        self.loadMenuList();
    }
}
</script>
