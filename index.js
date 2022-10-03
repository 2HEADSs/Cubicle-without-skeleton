const express = require('express');
const port = 3000;

const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');
const databaseConfig = require('./config/database')


async function start() {
    const app = express();

    await databaseConfig(app)
    expressConfig(app);
    routesConfig(app)
    app.listen(port, () => console.log(`Server listening on port: ${port}..........`))
}

start()