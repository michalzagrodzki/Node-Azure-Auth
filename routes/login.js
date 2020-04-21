var express = require('express');
const login = {
  post: function(req, res, next) {
    res.send('login');
  }
}

module.exports = login;
