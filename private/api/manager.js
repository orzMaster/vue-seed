'use strict'

var model = require('./model')
var MessageXSend = require('../service/submail/messageXSend');
var helper = require('../util/helper')
var cache = require('../util/cache')

module.exports.menu_list = function(body, callback) {
    callback(null, model.menus)
}

module.exports.user_info = function(body, callback) {
    callback(null, model.user_info)
}

module.exports.verify_code = function(body, callback) {
    var phone = body.phone
    var code = helper.rid(6, 'n')
    var messageXSend = new MessageXSend();

    cache.setCodeByPhone(phone, code, function(error, status) {

        console.log('verify_code', status);

        messageXSend.add_to(phone);
        messageXSend.set_project('lrs5I4');
        messageXSend.add_var('type', '预约');
        messageXSend.add_var('code', code);

        messageXSend.xsend(function(err, httpResponse, body) {
            if (err) {
                return console.error('upload failed:', err);
            }

            var data = JSON.parse(body)
            if (data.status == "error") {
                callback(body, null)
            }
            console.log('Upload successful!  Server responded with:', data);
        });
    })
}

module.exports.verify_reserve = function(body, callback) {

}
