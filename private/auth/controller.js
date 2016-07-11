'use strict'

module.exports.login = function(req, res, next) {
    switch (req.method) {
        case 'GET':
            {
                if (!req.session.user) {
                    req.flash('error', '当前没有登陆') // account not found
                    return res.render(
                        'admin/login', {
                            title: ''
                        }
                    )
                }

                res.render(
                    'admin/index', {
                        title: ''
                    }
                )
                break
            }
        case 'POST':
            {
                console.log(req.body)
                break
            }
    }
}

module.exports.register = function(req, res, next) {
    switch (req.method) {
        case 'POST':
            {
                console.log(req.body)
                break
            }
    }
}

module.exports.logout = function(req, res, next) {
    req.logout && req.logout()

    res.clearCookie(config.cookie.name)
    req.flash('info', '已退出当前用户')
    res.redirect('/login')
}

module.exports.ensureAuthenticated = function(req, res, next) {
    if (req.isAuthenticated())
        return next()

    res.redirect('login')
}

module.exports.passwordForgotten = function(req, res, next) {
    res.render('auth/password/forgotten')
}

module.exports.tryPasswordForgotten = function(req, res, next) {
    var email = req.body.email

    if (!(email && email.length)) {
        req.flash('error', '不存在此账号') // account not found
        return res.redirect('/password/forgotten')
    }

    userManager.getByEmail(email, function(error, user) {
        if (error)
            return next(error)
        else if (!user) {
            req.flash('error', '不存在此账号') // account not found
            return res.redirect('/password/forgotten')
        }

        authManager.sendResetPasswordEmail(email, function(error) {
            if (error)
                return next(error)

            res.render('auth/password/email_sent')
        })
    })
}

module.exports.passwordReset = function(req, res, next) {
    var email = req.query.email
    var token = req.query.token

    if (!(email && email.length)) {
        req.flash('error', '不存在此账号') // account not found
        return res.redirect('/login')
    }
    if (!(token && token.length)) {
        req.flash('error', '无效或过期的token信息') // token invalid or expired
        return res.redirect('/login')
    }
    if (true !== authManager.isEmailTokenValid(email, token)) {
        req.flash('error', '无效或过期的token信息') // token invalid or expired
        return res.redirect('/login')
    }

    userManager.getByEmail(email, function(error, user) {
        if (error)
            return next(error)
        else if (!user) {
            req.flash('error', '不存在此账号') // account not found
            return res.redirect('/login')
        }

        res.render('auth/password/reset', {
            originalUrl: req.originalUrl,
        })
    })
}

module.exports.tryPasswordReset = function(req, res, next) {
    var email = req.query.email
    var token = req.query.token

    if (!(email && email.length)) {
        req.flash('error', '不存在此账号') // account not found
        return res.redirect('/login')
    }
    if (!(token && token.length)) {
        req.flash('error', '无效或过期的token信息') // token invalid or expired
        return res.redirect('/login')
    }
    if (true !== authManager.isEmailTokenValid(email, token)) {
        req.flash('error', '无效或过期的token信息') // token invalid or expired
        return res.redirect('/login')
    }

    var password = req.body.password
    var passwordRepeat = req.body['password-repeat']

    if (!(password && password.length && passwordRepeat && passwordRepeat.length && password === passwordRepeat)) {
        req.flash('error', '密码不匹配') // passwords don't match
        return res.redirect(req.originalUrl)
    }

    userManager.getByEmail(email, function(error, user) {
        if (error)
            return next(error)
        else if (!user) {
            req.flash('error', '不存在此账号') // account not found
            return res.redirect('/login')
        }

        authManager.forceChangePasswordByID(user.id, password, function(error) {
            if (error)
                return next(error)

            req.flash('success', '密码重置成功') // password update successfully
            res.redirect('/login')
        })
    })
}
