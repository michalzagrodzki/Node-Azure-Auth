const passport = require('passport');

const ACCESS_TOKEN = 'access';
const REFRESH_TOKEN = 'refresh';

const auth = {
  signin: {
    get: function(req, res, next) {
      passport.authenticate('azuread-openidconnect',
        {
          response: res,
          prompt: 'login',
          failureRedirect: '/401',
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
          failureRedirect: '/401',
          failureFlash: false
        }
      )(req,res,next);
    },
    redirect: function(req, res) {
      const clientRedirectUri = process.env.LOGIN_REDIRECT
      const accessToken = req.user.oauthToken.token.access_token
      const encodedAccess = encodeURIComponent(accessToken)
      const refreshToken = req.user.oauthToken.token.refresh_token
      const encodedRefresh = encodeURIComponent(refreshToken)
      res.statusCode = 302;
      res.setHeader("Location", `${clientRedirectUri}?${ACCESS_TOKEN}=${encodedAccess}&${REFRESH_TOKEN}=${encodedRefresh}`);
      res.end();
    }
  },
  signout: {
    get: function(req, res, next) {
      req.session.destroy(function (error) {
        if (!error) {
          req.logout();
          res.status(200).send('logout')
        } else {
          res.status(500).send(error)
        }   
      })
    }
  },
  route: {
    isAuthenticated: function (req, res, next) {
      if (req.headers.authorization && req.headers.authorization.length > 0) {
        next()
      } else {
        next('/403')
      }
    }
  }
}

module.exports = auth;
