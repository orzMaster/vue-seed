'use strict'

var mailer = require('../util/mailer')
var helper = require('../util/helper')
var config = require('../../config')

module.exports.sendResetPasswordEmail = function(email, callback) {
    var token = helper.getEmailToken(email)
    var resetLink = 'http://' + config.cookie.domain + '/password/reset?token=' +
        token + '&email=' + encodeURIComponent(email)
    var content = '你好，\n\n请点击<a href="' + resetLink + '">找回密码</a>，\n' +
        '或者复制下面链接到浏览器打开，用以重置您的密码 。此邮件今天内有效，请及时去重置您的密码！\n' + resetLink

    var options = {
        subject: '找回密码', //主题 // Subject line
        to: email,
        text: content,
        html: content,
    }

    mailer.send(options, callback)
}

module.exports.isEmailTokenValid = function(email, token) {
    return token === helper.getEmailToken(email)
}

module.exports.forceChangePasswordByID = function(userID, newPassword, callback) {

}
