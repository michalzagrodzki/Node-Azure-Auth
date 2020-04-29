/* GET user details. */
const error = {
  auth: {
    route: function(req, res, next) {
      res.status(403)
    },
    login: function(req, res, next) {
      res.status(401)
    }
  },
}

module.exports = error;
