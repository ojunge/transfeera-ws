'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('accounts_type', { 
      code: {
        type: Sequelize.STRING(2),
        allowNull: false,
        autoIncrement: false,
        primaryKey: true
      },
      name: {
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
      return queryInterface.dropTable('accounts_type');
  }
};
