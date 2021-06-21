'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkInsert('AccountType', [
      {code: 'CC',name: 'CONTA_CORRENTE'},
      {code: 'CP',name: 'CONTA_POUPANCA'},
      {code: 'CF',name: 'CONTA_FACIL'}
    
    ], {});

},

down: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkDelete('AccountType', null, {});
}
};

