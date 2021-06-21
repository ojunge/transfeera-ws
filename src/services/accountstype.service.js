const repository = require('../repositories/accountstype.repository');
 
exports.findAll = async () => {
  return repository.findAll();
};