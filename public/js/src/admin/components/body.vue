<style>

</style>

<template>
    <section id="main">
        <aside id="sidebar">
            <component :is="sidebar"></component>
        </aside>

        <aside id="chat">
            <component :is="chat"></component>
        </aside>

        <section id="content">
            <div class="container">
                <router-view></router-view>
            </div>
        </section>
    </section>
</template>

<script>
module.exports = {
    data: function() {
        return {
            sidebar: 'sidebar',
            chat: 'chat'
        }
    },
    components: {
        sidebar: require('./common/sidebar.vue'),
        chat: require('./common/chat.vue')
    },
    ready: function() {

    }
}
</script>
