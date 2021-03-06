const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const User = require('../models/User');

module.exports = (config) => {
    mongoose.connect(config.connectionString);

    let database = mongoose.connection;

    database.once('open', (err) => {
        if(err){
            console.log(err);
            return;
        }

        console.log("Connected!");
        User.seedAdminUser();
    });

    database.on('error', (err) => {
        if(err){
            console.log(err);
            return;
        }
    });

    require("../models/Product");
    require("../models/Category");
    require("../models/User");
};
