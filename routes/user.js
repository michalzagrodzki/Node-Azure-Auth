var express = require('express');

/* GET user details. */
const user = {
  get: async function(req, res, next) {
    await res.send('user');
  }
}

module.exports = user;
