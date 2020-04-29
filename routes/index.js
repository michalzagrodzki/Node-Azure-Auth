var express = require('express');
var router = express.Router();

var auth = require('./auth');
var user = require('./user');
var error = require('./error')

/* GET signin. */
router.get('/auth/signin',
  auth.signin.get
);

router.post('/auth/callback',
  auth.callback.post,
  auth.callback.redirect
);

/* GET user details. */
router.get('/user',
  auth.route.isAuthenticated,
  user.get
);

router.get('/401',
  error.auth.login
);

router.get('/403',
  error.auth.route
);

module.exports = router;
