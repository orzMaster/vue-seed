<style>

</style>

<template>
    <header id="header">
        <ul class="header-inner">
            <li id="menu-trigger" data-trigger="#sidebar">
                <div class="line-wrap">
                    <div class="line top"></div>
                    <div class="line center"></div>
                    <div class="line bottom"></div>
                </div>
            </li>

            <li class="logo hidden-xs">
                <a href="/">后台管理</a>
            </li>

            <li class="pull-right">
                <ul class="top-menu">
                    <li id="toggle-width">
                        <div class="toggle-switch">
                            <input id="tw-switch" type="checkbox" hidden="hidden" checked>
                            <label for="tw-switch" class="ts-helper"></label>
                        </div>
                    </li>
                    <li id="top-search">
                        <a class="tm-search" href="index.html"></a>
                    </li>
                    <component :is="messages"></component>
                    <component :is="notifications"></component>
                    <component :is="tasks"></component>
                    <component :is="settings"></component>
                    <li class="hidden-xs" id="chat-trigger" data-trigger="#chat">
                        <a class="tm-chat" href="index.html"></a>
                    </li>
            </li>
        </ul>

        <!-- Top Search Content -->
        <div id="top-search-wrap">
            <input type="text">
            <i id="top-search-close">&times;</i>
        </div>
    </header>
</template>

<script>
module.exports = {
    data: function() {
        return {
            messages: 'messages',
            notifications: 'notifications',
            tasks: 'tasks',
            settings: 'settings'
        }
    },
    components: {
        messages: require('./common/messages.vue'),
        notifications: require('./common/notifications.vue'),
        tasks: require('./common/tasks.vue'),
        settings: require('./common/settings.vue')
    },
    ready: function() {
        $('body').toggleClass('toggled sw-toggled');
    }
}
</script>
