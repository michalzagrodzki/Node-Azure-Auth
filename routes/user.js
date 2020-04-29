var graph = require('./../utils/graph');

/* GET user details. */
const user = {
  get: async function(req, res, next) {
    try {
      const accessToken = req.headers.authorization
      const user = await graph.getUserDetails(accessToken);
      await res.status(200).send(user);
    } catch (error) {
      res.status(401).send(error);
    }
  }
}

module.exports = user;
