

const homeController = require('../controllers/homeController')
const createCubeController = require('../controllers/createCubeController')
const createAccessoryController = require('../controllers/createAccessoryController')
const aboutController = require('../controllers/aboutController')
const detailsController = require('../controllers/detailsController')
const notFoundController = require('../controllers/notFoundController')

module.exports = (app) => {
    app.use(homeController)
    app.use('/createCube', createCubeController)
    app.use('/createAccessory', createAccessoryController)
    app.use('/about', aboutController)
    app.use('/details', detailsController)
    app.use('*/', notFoundController)
}
