<style>

</style>

<template>
    <li class="dropdown">
        <a data-toggle="dropdown" class="tm-notification" href="index.html"><i class="tmn-counts">{{ notifications.data.length }}</i></a>
        <div class="dropdown-menu dropdown-menu-lg pull-right">
            <div class="listview" id="notifications">
                <div class="lv-header">
                    {{ notifications.title }}
                    <ul class="actions">
                        <li class="dropdown">
                            <a href="index.html" data-clear="notification">
                                <i class="zmdi zmdi-check-all"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="lv-body">
                    <a class="lv-item" href="index.html" v-for="notification in notifications.data">
                        <div class="media">
                            <div class="pull-left">
                                <img class="lv-img-sm" :src="notification.picture" alt="">
                            </div>
                            <div class="media-body">
                                <div class="lv-title">{{ notification.title }}</div>
                                <small class="lv-small">{{ notification.conent }}</small>
                            </div>
                        </div>
                    </a>
                </div>
                <a class="lv-footer" href="index.html">View Previous</a>
            </div>
        </div>
    </li>
</template>

<script>
module.exports = {
    data: function() {
        return {
            notifications: {
                title: 'Notification',
                data:[
                    {
                        title: 'David Belle',
                        picture: '/static/images/admin/profile-pics/1.jpg',
                        conent: 'Cum sociis natoque penatibus et magnis dis parturient montes'
                    },
                    {
                        title: 'Jonathan Morris',
                        picture: '/static/images/admin/profile-pics/2.jpg',
                        conent: 'Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel'
                    }
                ]
            }
        }
    },
    components: {

    },
    ready: function() {

    }
}
</script>
