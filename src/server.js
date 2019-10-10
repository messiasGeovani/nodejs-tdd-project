/**
 * Importing modules
 */
const app = require('./app')

/**
 * Setting the application server port
 */
app.listen(process.env.PORT || 3000)