var express = require('express');
var router = express.Router();

var home = require('./home');
var login = require('./login');
var user = require('./user');

/* GET home page. */
router.get('/', home.get);

/* POST login. */
router.post('/login', login.post);

/* GET user details. */
router.get('/user', user.get);

module.exports = router;
