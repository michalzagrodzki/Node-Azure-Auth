const home = {
  get: async function(req, res, next) {
    await res.send('This is server for authenticating with Azure AD');
  }
}

module.exports = home;
