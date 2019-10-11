/**
 * Database config object
 */
module.exports = {
  username: 'geovani',  
  password: '1234',  
  database: 'nodeauth',  
  host: '127.0.0.1',  
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