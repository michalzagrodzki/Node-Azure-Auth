var graph = require('./../utils/graph');

/* GET user details. */
const user = {
  get: async function(req, res, next) {
    const accessToken = req.headers.authorization
    const user = await graph.getUserDetails(accessToken);
    await res.status(200).send(user);
  }
}

module.exports = user;
