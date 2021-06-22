'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkInsert('accounts_type', [
      {code: 'CC',name: 'CONTA_CORRENTE', createdAt: new Date(),updatedAt: new Date()},
      {code: 'CP',name: 'CONTA_POUPANCA', createdAt: new Date(),updatedAt: new Date()},
      {code: 'CF',name: 'CONTA_FACIL', createdAt: new Date(),updatedAt: new Date()}
    
    ], {});

},

down: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkDelete('accounts_type', null, {});
}
};

