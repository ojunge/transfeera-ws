'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BankAccountHolder extends Model {
    
    static associate(models) {
      // define association here
    }
  };
  BankAccountHolder.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nif: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    agency: {
        type: DataTypes.STRING,
        allowNull: false
    },
    agencyDigit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    account: {
        type: DataTypes.STRING,
        allowNull: false
    },
    accountDigit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    accountTypeCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'BankAccountHolder',
    timestamps: false,
    tableName : 'banks_account_holder'
  });
  return BankAccountHolder;
};