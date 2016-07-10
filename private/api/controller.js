'use strict'

var model = require('./model')

module.exports.menu_list = function(req, res, next) {
    return res.send(model.menus)
}
