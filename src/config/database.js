/**
 * environment variables config
 */
require('dotenv').config({
  path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
})

/**
 * Database config object
 */
module.exports = {
  username: process.env.DB_USER,  
  password: process.env.DB_PASS,  
  database: process.env.DB_NAME,  
  host: process.env.DB_HOST,  
  dialect: process.env.DB_DIALECT || 'postgres',
  storage: './__tests__/database.sqlite',
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    // setting the underscored tables and attributes method
    underscored: true,
    underscoredAll: true
  }
}