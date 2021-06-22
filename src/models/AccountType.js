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
    modelName: 'AccountType',
    timestamps: true,
    tableName : 'accounts_type'
  });
  return AccountType;
};