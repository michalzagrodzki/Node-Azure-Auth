var express = require('express');

const login = {
  post: function(req, res, next) {
    console.log(req.body)
    res.send('login');
  }
}

module.exports = login;
