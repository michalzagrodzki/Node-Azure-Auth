var graph = require('./../utils/graph');

/* GET user details. */
const user = {
  get: async function(req, res, next) {
    if (!req.isAuthenticated()) {
      // send error response
      res.status(400)
    } else {
      const user = await graph.getUserDetails(accessToken);

      await res.status(200).send(user);
    }
  }
}

module.exports = user;
