const passport = require('passport');

const auth = {
  signin: {
    get: function(req, res, next) {
      console.log('signin')
      passport.authenticate('azuread-openidconnect',
        {
          response: res,
          prompt: 'login',
          failureRedirect: '/',
          failureFlash: false
        }
    )(req,res,next);
    }
  },
  callback: {
    post: function(req, res, next) { 
      passport.authenticate('azuread-openidconnect',
        {
          response: res,
          failureRedirect: '/',
          failureFlash: false
        }
      )(req,res,next);
    },
    redirect: function(req, res) {
      console.log('redirect after callback')
      res.status(301).redirect(process.env.LOGIN_REDIRECT);
    }
  }
}

module.exports = auth;
