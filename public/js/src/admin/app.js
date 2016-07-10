var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter();

var App = require('./app.vue');

router.beforeEach(function(transition) {
	console.log('即将浏览到: ' + transition.to.path);
	transition.next();
});

router.afterEach(function(transition) {
	console.log('成功浏览到: ' + transition.to.path);
});

router.start(App, '#app');
