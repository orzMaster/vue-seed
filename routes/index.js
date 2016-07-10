var express = require('express');
var router = express.Router();

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

module.exports = router;
