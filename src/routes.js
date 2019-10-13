/**
 * Importing modules
 */
const routes = require('express').Router()

// authentication middleware
const authMiddleware = require('./app/middlewares/auth')

const SessionController = require('./app/controllers/SessionController')

/**
 * Creating the routes
 */
routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.get('/dashboard', (req, res) => {
    return res.status(200).send()
})


/**
 * Exporting the routes
 */
module.exports = routes