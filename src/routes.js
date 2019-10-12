/**
 * Importing modules
 */
const routes = require('express').Router()
const SessionController = require('./app/controllers/SessionController')

/**
 * Creating the routes
 */
routes.post('/session', SessionController.store)


/**
 * Exporting the routes
 */
module.exports = routes