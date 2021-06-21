const { AccountType } = require('../models');

exports.findAll = async () => {
  return AccountType.findAll();
 };
