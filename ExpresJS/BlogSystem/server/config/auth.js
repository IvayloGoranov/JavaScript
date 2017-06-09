module.exports = {
  isAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect('/users/login');
    }
  },
  isInRole: (role) => {
    return (req, res, next) => {
      if (req.isAuthenticated() && req.user.roles.indexOf(role) > -1) {
        next();
      } else {
        res.locals.error = 'Only admins can create categories';
        res.redirect('/users/login');
      }
    }
  }
}
