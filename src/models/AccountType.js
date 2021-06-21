'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AccountType extends Model {
    
    static associate(models) {
      // define association here
    }
  };
  AccountType.init({
    code: {
        type: DataTypes.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: true
    },
    name: {
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
    modelName: 'AccountType',
    timestamps: false,
    tableName : 'accounts_type'
  });
  return AccountType;
};