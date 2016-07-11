'use strict'

var model = require('./model')

module.exports.menu_list = function(req, res, next) {
    return res.send(model.menus)
}

module.exports.user_indo = function(req, res, next) {
    return res.send(model.user)
}

module.exports.verify_code = function(req, res, next) {
    return res.send({
        code: 0
    })
}
