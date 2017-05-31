const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = (config) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(config.connectionString);

        let database = mongoose.connection;

        database.once('open', (err) => {
            if(err){
                console.log(err);
                return;
            }

            console.log("Connected!");
            resolve();
        });

        database.on('error', (err) => {
            if(err){
                console.log(err);
                reject(err);
                return;
            }
        });

        require("../models/Image");
        require("../models/Tag");
    });
};
