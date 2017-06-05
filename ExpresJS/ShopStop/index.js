const port = 3000;

const express = require('express');

const config = require('./config/config.js');
const databaseConfig = require('./config/database.config.js');
const routesConfig = require('./config/routes.js');
const expressConfig = require('./config/express.config.js');
const passportConfig = require('./config/passport');

let app = express();
let environment = process.env.NODE_ENV || 'development';

databaseConfig(config[environment]);
expressConfig(app, config[environment]);
routesConfig(app);
passportConfig();

app.listen(port);