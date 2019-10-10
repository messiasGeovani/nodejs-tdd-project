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
        this.express.use(require('./routes'))
    }
}

// exporting the object
module.exports = new AppController().express