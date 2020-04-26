var express = require('express');
var router = express.Router();

var auth = require('./auth');
var user = require('./user');

/* GET signin. */
router.get('/auth/signin',
  auth.signin.get
);

router.post('/auth/callback',
  auth.callback.post,
  auth.callback.redirect
);

/* GET user details. */
router.get('/user', user.get);

module.exports = router;
