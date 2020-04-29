const passport = require('passport');

const ACCESS_TOKEN = 'access';
const REFRESH_TOKEN = 'refresh';

const auth = {
  signin: {
    get: function(req, res, next) {
      console.log('signin')
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
      console.log('***** callback')
      console.log(req.body)
      passport.authenticate('azuread-openidconnect',
        {
          response: res,
          failureRedirect: '/401',
          failureFlash: false
        }
      )(req,res,next);
    },
    redirect: function(req, res) {
      console.log('***** redirect')
      console.log(req.user)
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
