const repository = require('../repositories/banks.repository');
 
exports.findAll = async (search) => {
  return repository.findAll(search);
};