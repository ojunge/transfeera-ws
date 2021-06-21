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
    agencydigit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    account: {
        type: DataTypes.STRING,
        allowNull: false
    },
    accountdigit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    accounttypecode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdat: {
        type: 'TIMESTAMP',
        allowNull: false
      },
      updatedat: {
        type: 'TIMESTAMP',
        allowNull: false
      }
  }, {
    sequelize,
    modelName: 'BankAccountHolder',
    timestamps: false,
    tableName : 'favorites'
  });
  return BankAccountHolder;
};