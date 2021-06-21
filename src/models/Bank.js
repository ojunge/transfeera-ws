'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bank extends Model {
    
    static associate(models) {
      // define association here
    }
  };
  Bank.init({
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
    urlimg: {
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
    modelName: 'Bank',
    timestamps: false,
    tableName : 'banks'
  });
  return Bank;
};