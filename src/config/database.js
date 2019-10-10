/**
 * Database config object
 */
module.exports = {
  host: '127.0.0.1',
  username: 'ddocker',
  password: 'docker',
  database: 'nodeath',
  dialect: 'postgres',
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    // setting the underscored tables and attributes method
    underscored: true,
    underscoredAll: true
  }
}