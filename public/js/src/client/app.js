var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter();

var App = require('./app.vue');

var home = require('./components/pages/home.vue');
var introduce = require('./components/pages/introduce.vue');
var car = require('./components/pages/car.vue');
var test = require('./components/pages/test.vue');
var buy = require('./components/pages/buy.vue');
var contact = require('./components/pages/contact.vue');

router.redirect({
    '/': '/home'
});

router.map({
    '/home': {
        name: 'home',
        component: Vue.extend(home)
    },
    '/car': {
        name: 'car',
        component: Vue.extend(car)
    },
    '/introduce': {
        name: 'introduce',
        component: Vue.extend(introduce)
    },
    '/test': {
        name: 'test',
        component: Vue.extend(test)
    },
    '/buy': {
        name: 'buy',
        component: Vue.extend(buy)
    },
    '/contact': {
        name: 'contact',
        component: Vue.extend(contact)
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
