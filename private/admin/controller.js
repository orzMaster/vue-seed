'use strict';

var dashboardManager = require('./manager');
var helper = require('../util/helper');
var chineseDays = {
    0: '日',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
};

module.exports.index = function(req, res, next) {
    res.render('admin/index', {
        title: ''
    });
};
