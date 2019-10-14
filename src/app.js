/**
 * dotenv config
 */
require('dotenv').config({
    path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
})

/**
 * Importing modules
 */
const express = require('express')

/**
 * Creating the app
 */
class AppController {
    constructor() {
        /**
         * Starting the express app
         */
        this.express = express()

        /**
         * Starting the methods
         */
        this.middlewares()
        this.routes()
    }

    middlewares() {
        // json body support config
        this.express.use(express.json())
    }

    routes() {
        // routes config
        const routes = require('./routes').Routes
        this.express.use(routes)
    }
}

// exporting the object
exports.AppController = new AppController().express