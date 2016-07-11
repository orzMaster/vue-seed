var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter();

var App = require('./app.vue');

var dashboard = require('./components/pages/dashboard.vue');
var notepad = require('./components/pages/notepad.vue');

router.redirect({
    '/': '/dashboard'
});

router.map({
    '/dashboard': {
        name: 'dashboard',
        component: Vue.extend(dashboard)
    },
    '/notepad': {
        name: 'notepad',
        component: Vue.extend(notepad)
    }
});

router.beforeEach(function(transition) {
    try {
        console.log('即将浏览到: ' + transition.to.path);
        transition.next();
    } catch (e) {
        transition.abort()
        console.log('route caught', e)
    }
});

router.afterEach(function(transition) {
    console.log('成功浏览到: ' + transition.to.path);
});

router.start(App, '#app');
