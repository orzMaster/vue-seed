'use strict';

var express = require('express');
var router = express.Router();

var authController = require('./controller');

/* Auth routes */

// Display login page
router.all('/login', authController.login);
router.all('/register', authController.register);
// Logout user
router.get('/logout', authController.logout);

// Forgotten password (Will display the form page)
router.get('/password/forgotten', authController.passwordForgotten);
// Forgotten password (Will send a link by email)
router.post('/password/forgotten', authController.tryPasswordForgotten);
// Reset password (After click on the link sent by email)
router.get('/password/reset', authController.passwordReset);
// Reset password (Will set the new password)
router.post('/password/reset', authController.tryPasswordReset);

module.exports = router;
