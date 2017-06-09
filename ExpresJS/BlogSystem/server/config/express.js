const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

module.exports = (app, settings) => {
  app.set('view engine', 'pug')
  app.set('views', path.join(settings.rootPath, 'views'))

  app.use(bodyParser.urlencoded({ extended: true }));

  //app.use('/public', express.static(path.normalize(path.join(settings.rootPath, '/public'))));
    app.use((req, res, next) => {
        if(req.url.startsWith('/public')){
            req.url = req.url.replace('/public', '');
        }

        next();
    }, express.static(path.normalize(path.join(settings.rootPath, 'public'))));

  app.use(cookieParser());
  app.use(session({
    secret: 'neshto-taino!@#$%',
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use((req, res, next) => {
    if (req.user) {
      res.locals.user = req.user;
      res.locals.isAdmin = req.user.roles.indexOf('Admin') >= 0;
    }

    next();
  });

  console.log('Express ready!');
}
