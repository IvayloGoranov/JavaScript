const path = require('path');

const express = require('express');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')

module.exports = (app, config) => {
    app.set('view engine', 'pug')
    app.set('views', path.join(config.rootPath, 'views'))

    app.use(bodyParser.urlencoded({ extended: true }))

    //app.use('/content', express.static(path.normalize(path.join(config.rootPath, '/content'))));

    app.use((req, res, next) => {
        if(req.url.startsWith('/content')){
            req.url = req.url.replace('/content', '');
        }

        next();
    }, express.static(path.normalize(path.join(config.rootPath, 'content'))));

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
        }

        next();
    })
};
