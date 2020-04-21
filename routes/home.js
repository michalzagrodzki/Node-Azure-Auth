var express = require('express');

const home = {
  get: function(req, res, next) {
    res.send('This is server for authenticating with Azure AD');
  }
}

module.exports = home;
