const login = {
  post: async function(req, res, next) {
    await console.log(req.body)
    await res.send('login');
  }
}

module.exports = login;
