'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('banks', { 
      code: {
        type: Sequelize.STRING(10),
        allowNull: false,
        autoIncrement: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      urlimg: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

    });
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('banks');
  }
};
