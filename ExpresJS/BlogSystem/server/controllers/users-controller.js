const encryption = require('../utilities/encryption');
const User = require('mongoose').model('User');

module.exports = {
  registerGet: (req, res) => {
    res.render('users/register');
  },
  registerPost: (req, res) => {
    let user = req.body;
      if(user.password && user.password !== user.confirmedPassword) {
          user.error = "Passwords do not match";
          res.render('users/register', user);

          return;
      }

      let salt = encryption.generateSalt();
      user.salt = salt;

      if(user.password) {
          let hashedPassword = encryption.generateHashedPassword(salt,  user.password);
          user.password = hashedPassword;
      }

      User.create(user).then(user => {
          req.logIn(user, (err, user) => {
              if (err) {
                  res.render('users/register', {error: "Authentication not working!"});

                  return;
              }

              res.redirect('/');
          })
      }).catch(err => {
          user.error = err;
          res.render('users/register', user);
      });
  },
  loginGet: (req, res) => {
    res.render('users/login');
  },
  loginPost: (req, res) => {
      let userToLogin = req.body;
      User
          .findOne({ username: userToLogin.username }).then(user => {
          if (!user || !user.authenticate(userToLogin.password)) {
              res.render('users/login', {error: "Invalid credentials"});

              return;
          }else {
              req.logIn(user, (err, user) => {
                  if (err) {
                      res.render('users/login', {error: "Authentication not working"});

                      return;
                  }

                  res.redirect('/');
              });
          }
      });
  },
  logout: (req, res) => {
    req.logout();
    res.redirect('/');
  }
}
