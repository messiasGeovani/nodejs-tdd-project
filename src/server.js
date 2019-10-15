/**
 * Importing modules
 */
const models = require('./app/models');
const app = require('./app').AppController;

/**
 * Setting the application server port
 */

// Models.sequelize.sync irá criar as tabelas quando não houver e sincronizar os modelos com o banco de dados.
models.sequelize.sync().then(() => {
  console.log('Sync OK! - Server running on port %i', process.env.PORT || 3000);
  app.listen(process.env.PORT || 3000);
});
