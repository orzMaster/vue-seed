<style>

</style>

<template>
    <li class="dropdown">
        <a data-toggle="dropdown" class="tm-message" href="index.html"><i class="tmn-counts">{{ messages.data.length }}</i></a>
        <div class="dropdown-menu dropdown-menu-lg pull-right">
            <div class="listview">
                <div class="lv-header">
                    {{ messages.title }}
                </div>
                <div class="lv-body">
                    <a class="lv-item" href="index.html" v-for="message in messages.data">
                        <div class="media">
                            <div class="pull-left">
                                <img class="lv-img-sm" :src="message.picture" alt="">
                            </div>
                            <div class="media-body">
                                <div class="lv-title">{{ message.title }}</div>
                                <small class="lv-small">{{ message.conent }}</small>
                            </div>
                        </div>
                    </a>
                </div>
                <a class="lv-footer" href="index.html">View All</a>
            </div>
        </div>
    </li>
</template>

<script>
module.exports = {
    data: function() {
        return {
            messages: {
                title: 'Messages',
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
                    },
                    {
                        title: 'Fredric Mitchell Jr.',
                        picture: '/static/images/admin/profile-pics/3.jpg',
                        conent: 'Phasellus a ante et est ornare accumsan at vel magnauis blandit turpis at augue ultricies'
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
