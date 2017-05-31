let environment = process.env.NODE_ENV || 'development';
const config = require('./config/config.js');
const database = require('./config/database.config.js');
const instanodeDb = require("./instanode-db");

database(config[environment]).then(() => {
    instanodeDb.saveImage(
        {   url: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
            description: 'such cat much wow',
            tags: ['cat', 'kitty', 'cute','catstagram']
        }
    ).then(() => {
        instanodeDb.findByTag('cat').then((results) => {
            console.log(results);
        });
    })
});




