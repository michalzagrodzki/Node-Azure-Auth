var express = require('express');

/* GET user details. */
const user = {
  get: function(req, res, next) {
    res.send('user');
  }
}

module.exports = user;
