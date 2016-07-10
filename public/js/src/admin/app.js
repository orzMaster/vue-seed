var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter();

var App = require('./app.vue');

var dashboard = require('./components/pages/dashboard.vue');
var community_list = require('./components/pages/community/list.vue');
var video_list = require('./components/pages/video/list.vue');
var notepad = require('./components/pages/notepad.vue');

router.redirect({
    '/': '/dashboard'
});

router.map({
    '/dashboard': {
        name: 'dashboard',
        component: Vue.extend(dashboard)
    },
    '/community/list': {
        name: 'community_list',
        component: Vue.extend(community_list)
    },
    '/video/list': {
        name: 'video_list',
        component: Vue.extend(video_list)
    },
    '/notepad': {
        name: 'notepad',
        component: Vue.extend(notepad)
    }
});

router.beforeEach(function(transition) {
	console.log('即将浏览到: ' + transition.to.path);
	transition.next();
});

router.afterEach(function(transition) {
	console.log('成功浏览到: ' + transition.to.path);
});

router.start(App, '#app');
