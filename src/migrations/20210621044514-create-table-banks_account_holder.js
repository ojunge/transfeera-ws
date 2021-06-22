'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('banks_account_holder', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      nif: {
        type: Sequelize.STRING(14),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      agency: {
        type: Sequelize.STRING(4),
        allowNull: false
      },
      agencyDigit: {
        type: Sequelize.STRING(1),
        allowNull: false
      },
      account: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      accountDigit: {
        type: Sequelize.STRING(1),
        allowNull: false
      },
      bankCode: {
        type: Sequelize.STRING(10),
        allowNull: false,
        references: { model: 'banks', key: 'code' }
      },
      accountTypeCode: {
        type: Sequelize.STRING(2),
        allowNull: false
      },
      status: {
        type: Sequelize.STRING(1),
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
    return queryInterface.dropTable('banks_account_holder');
  }
};
