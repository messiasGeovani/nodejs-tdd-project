/**
 * Importing modules
 */
const routes = require('express').Router()
const SessionController = require('./app/controllers/SessionController')

/**
 * Creating the routes
 */
routes.post('/sessions', SessionController.store)


/**
 * Exporting the routes
 */
module.exports = routes