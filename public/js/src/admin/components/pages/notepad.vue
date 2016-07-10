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
        <div class="col-md-8">
            <div class="card wall-posting">
                <div class="card-body card-padding">
                    <textarea class="wp-text" data-auto-size placeholder="Write Something..."></textarea>

                    <div class="tab-content p-0">
                        <div class="wp-media tab-pane" id="wpm-image">
                            Images - Coming soon...
                        </div>

                        <div class="wp-media tab-pane" id="wpm-video">
                            Video Links - Coming soon...
                        </div>

                        <div class="wp-media tab-pane" id="wpm-link">
                            Links - Coming soon...
                        </div>
                    </div>
                </div>

                <ul class="list-unstyled clearfix wpb-actions">
                    <li class="wpba-attrs">
                        <ul class="list-unstyled list-inline m-l-0 m-t-5">
                            <li><a data-wpba="image" data-toggle="tab" href="wall.html" data-target="#wpm-image"><i class="zmdi zmdi-image"></i></a></li>
                            <li><a data-wpba="video" data-toggle="tab" href="wall.html" data-target="#wpm-video"><i class="zmdi zmdi-play-circle"></i></a></li>
                            <li><a data-wpba="link" data-toggle="tab" href="wall.html" data-target="#wpm-link"><i class="zmdi zmdi-link"></i></a></li>
                        </ul>
                    </li>

                    <li class="pull-right"><button class="btn btn-primary btn-sm" v-on:click="post">发布</button></li>
                </ul>
            </div>

            <!-- -->
            <div class="card" v-for="post in posts">
                <div class="card-header">
                    <div class="media">
                        <div class="pull-left">
                            <img class="lv-img" :src="post.profile_pics" alt="">
                        </div>

                        <div class="media-body m-t-5">
                            <h2>{{ post.profile_name }}<small>Post on {{ formatDate(post.create_date) }}</small></h2>
                        </div>
                    </div>
                </div>

                <div class="card-body card-padding">
                    <p>{{ post.content }}</p>
                    <div class="wall-img-preview lightbox clearfix" v-if="post.images.length > 0">
                        <div class="wip-item" data-src="{{ image.src }}" style="background-image: url({{ image.src }});" v-for="image in post.images">
                            <img :src="image.thumbs" alt="{{ image.title }}">
                        </div>
                    </div>
                    <ul class="wall-attrs clearfix list-inline list-unstyled">
                        <li class="wa-stats">
                            <span><i class="zmdi zmdi-comments"></i>{{ post.comment_count }}</span>
                            <span class="active"><i class="zmdi zmdi-favorite"></i>{{ post.favorite_count }}</span>
                        </li>

                        <li class="wa-users" v-if="post.users.length > 0">
                            <a href="wall.html" v-for="user in post.users"><img :src="user.pics" alt="{{ user.name }}"></a>
                        </li>
                    </ul>
                </div>


                <div class="wall-comment-list">
                    <div class="wcl-list" v-if="post.comments.length > 0">
                        <div class="media" v-for="comment in post.comments">
                            <a href="wall.html" class="pull-left">
                                <img :src="comment.pics" alt="" class="lv-img-sm">
                            </a>

                            <div class="media-body">
                                <a href="wall.html" class="a-title">{{ comment.name }}</a> <small class="c-gray m-l-10">{{ comment.date }}</small>
                                <p class="m-t-5 m-b-0">{{ comment.content }}</p>
                            </div>

                            <ul class="actions">
                                <li class="dropdown">
                                    <a href="index.html" data-toggle="dropdown">
                                        <i class="zmdi zmdi-more-vert"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li>'
                                            <a href="index.html">Report</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Delete</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="wcl-form">
                        <div class="wc-comment">
                            <div class="wcc-inner wcc-toggle">
                                Write Something...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-4 hidden-sm">
            <div class="card">
                <div class="card-header">
                    <h2>About me</h2>
                </div>

                <div class="card-body card-padding">
                    Maecenas malesuada. Nam adipiscing. Etiam vitae tortor. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. <a data-ui-sref="pages.profile.profile-about"><small>Read more...</small></a>
                </div>
            </div>

            <div class="card picture-list">
                <div class="card-header">
                    <h2>Photos <small>Cras congue nec lorem eget posuere</small></h2>

                    <ul class="actions">
                        <li class="dropdown">
                            <a href="index.html" data-toggle="dropdown">
                                <i class="zmdi zmdi-more-vert"></i>
                            </a>

                            <ul class="dropdown-menu dropdown-menu-right">
                                <li>
                                    <a href="wall.html">Refresh</a>
                                </li>
                                <li>
                                    <a href="wall.html">Manage Widgets</a>
                                </li>
                                <li>
                                    <a href="wall.html">Widgets Settings</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="pl-body">
                    <div class="col-xs-3">
                        <a href="wall.html">
                            <img src="/static/img/headers/square/1.png" alt="">
                        </a>
                    </div>

                    <div class="col-xs-3">
                        <a href="wall.html">
                            <img src="/static/img/headers/square/2.png" alt="">
                        </a>
                    </div>
                    <div class="col-xs-3">
                        <a href="wall.html">
                            <img src="/static/img/headers/square/3.png" alt="">
                        </a>
                    </div>
                    <div class="col-xs-3">
                        <a href="wall.html">
                            <img src="/static/img/headers/square/4.png" alt="">
                        </a>
                    </div>
                    <div class="col-xs-3">
                        <a href="wall.html">
                            <img src="/static/img/headers/square/5.png" alt="">
                        </a>
                    </div>
                    <div class="col-xs-3">
                        <a href="wall.html">
                            <img src="/static/img/headers/square/6.png" alt="">
                        </a>
                    </div>
                    <div class="col-xs-3">
                        <a href="wall.html">
                            <img src="/static/img/headers/square/7.png" alt="">
                        </a>
                    </div>
                    <div class="col-xs-3">
                        <a href="wall.html">
                            <img src="/static/img/headers/square/8.png" alt="">
                        </a>
                    </div>
                    <div class="col-xs-3">
                        <a href="wall.html">
                            <img src="/static/img/headers/square/9.png" alt="">
                        </a>
                    </div>
                    <div class="col-xs-3">
                        <a href="wall.html">
                            <img src="/static/img/headers/square/1.png" alt="">
                        </a>
                    </div>
                    <div class="col-xs-3">
                        <a href="wall.html">
                            <img src="/static/img/headers/square/2.png" alt="">
                        </a>
                    </div>
                    <div class="col-xs-3">
                        <a href="wall.html">
                            <img src="/static/img/headers/square/3.png" alt="">
                        </a>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h2>Recent Comments <small>Commodo vel pharetra nisi. Donec velit libero</small></h2>
                </div>

                <div class="listview">
                    <div class="lv-body">
                        <a class="lv-item" href="wall.html">
                            <div class="media">
                                <div class="pull-left">
                                    <img class="lv-img-sm" src="/static/img/profile-pics/1.jpg" alt="">
                                </div>
                                <div class="media-body">
                                    <div class="lv-title">David Belle</div>
                                    <small class="lv-small">Cum sociis natoque penatibus et magnis dis parturient montes</small>
                                </div>
                            </div>
                        </a>
                        <a class="lv-item" href="wall.html">
                            <div class="media">
                                <div class="pull-left">
                                    <img class="lv-img-sm" src="/static/img/profile-pics/2.jpg" alt="">
                                </div>
                                <div class="media-body">
                                    <div class="lv-title">Jonathan Morris</div>
                                    <small class="lv-small">Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel</small>
                                </div>
                            </div>
                        </a>
                        <a class="lv-item" href="wall.html">
                            <div class="media">
                                <div class="pull-left">
                                    <img class="lv-img-sm" src="/static/img/profile-pics/3.jpg" alt="">
                                </div>
                                <div class="media-body">
                                    <div class="lv-title">Fredric Mitchell Jr.</div>
                                    <small class="lv-small">Phasellus a ante et est ornare accumsan at vel magnauis blandit turpis at augue ultricies</small>
                                </div>
                            </div>
                        </a>
                        <a class="lv-item" href="wall.html">
                            <div class="media">
                                <div class="pull-left">
                                    <img class="lv-img-sm" src="/static/img/profile-pics/4.jpg" alt="">
                                </div>
                                <div class="media-body">
                                    <div class="lv-title">Glenn Jecobs</div>
                                    <small class="lv-small">Ut vitae lacus sem ellentesque maximus, nunc sit amet varius dignissim, dui est consectetur neque</small>
                                </div>
                            </div>
                        </a>
                        <a class="lv-item" href="wall.html">
                            <div class="media">
                                <div class="pull-left">
                                    <img class="lv-img-sm" src="/static/img/profile-pics/4.jpg" alt="">
                                </div>
                                <div class="media-body">
                                    <div class="lv-title">Bill Phillips</div>
                                    <small class="lv-small">Proin laoreet commodo eros id faucibus. Donec ligula quam, imperdiet vel ante placerat</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <a class="lv-footer" href="wall.html">View All</a>
                </div>
            </div>


            <div class="card">
                <div class="card-header">
                    <h2>Contact Information <small>Fusce eget dolor id justo luctus commodo vel pharetra nisi. Donec velit libero</small></h2>
                </div>
                <div class="card-body card-padding">
                    <div class="pmo-contact">
                        <ul>
                            <li class="ng-binding"><i class="zmdi zmdi-phone"></i> 00971123456789</li>
                            <li class="ng-binding"><i class="zmdi zmdi-email"></i> malinda.h@gmail.com</li>
                            <li class="ng-binding"><i class="zmdi zmdi-facebook-box"></i> malinda.hollaway</li>
                            <li class="ng-binding"><i class="zmdi zmdi-twitter"></i> @malinda (twitter.com/malinda)</li>
                            <li>
                                <i class="zmdi zmdi-pin"></i>
                                <address class="m-b-0 ng-binding">
                                    10098 A Towers, <br>
                                    Dubai Silicon Oasis, Dubai, <br>
                                    United Arab Emirates
                                </address>
                            </li>
                        </ul>
                    </div>

                    <a class="pmo-map" href="wall.html">
                        <img src="/static/img/demo/map.png" alt="">
                    </a>
                </div>
            </div>
        </div>
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
        self.loadPostList();
    }
}
</script>
