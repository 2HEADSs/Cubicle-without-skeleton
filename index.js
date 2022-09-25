const express = require('express');
const homeController = require('./controllers/homeController')
const createController = require('./controllers/createController')
const aboutController = require('./controllers/aboutController')
const detailsController = require('./controllers/detailsController')
const notFoundController = require('./controllers/notFoundController')

const hbs = require('express-handlebars').create({
    extname: '.hbs'
});

const app = express();
const port = 3000;

app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')

app.use(express.urlencoded({ extended: true }))
app.use('/static', express.static('static'));

app.use(homeController)
app.use('/create', createController)
app.use('/about', aboutController)
app.use('/details', detailsController)
app.use('*/', notFoundController)


app.listen(port, () => console.log(`Server listening on port: ${port}`))
