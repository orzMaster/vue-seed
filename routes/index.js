var express = require('express');
var router = express.Router();

var api_controller = require('../private/api/controller');

router.get('/', function(req, res, next) {
	res.render('client/index', {
		title: 'vue-seed'
	});
});

router.get('/admin', function(req, res, next) {
	res.render('admin/index', {
		title: 'vue-seed-admin'
	});
});

router.post('/api/menu/list', api_controller.menu_list);

module.exports = router;
