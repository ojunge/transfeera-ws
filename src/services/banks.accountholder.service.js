const repository = require('../repositories/banks.accountholder.repository');

exports.findAll = async (search) => {
  return repository.findAll(search);
};

 exports.findById = async (id) => {
    return repository.findById(id);
  };

 exports.create = async (payload) => {
  repository.create(payload);
};

exports.update = async (payload,id) => {
  repository.update(payload,id);
};

exports.updateEmail = async (id, email) => {
  repository.updateEmail(id, email);
};

exports.delete = async (id) => {
  repository.delete(id);
};

 

 
 