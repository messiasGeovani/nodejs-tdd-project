'use strict';

module.exports = {
  /**
   * Creating table
   */
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      // attribute name
      id: {
        // data type
        type: Sequelize.INTEGER,
        // primary key
        primaryKey: true,
        // auto increment
        autoIncrement: true,
        // not null
        allowNull: false
      },
      // attribute name
      name: {
        // data type
        type: Sequelize.STRING,
        // not null
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        // not repeat
        unique: true,
        allowNull: false
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  /**
   * Drop table
   */
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};
