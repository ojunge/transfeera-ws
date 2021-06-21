'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Bank', [
        {code: '001',name: 'Banco do Brasil', urlimg: 'https://transfeera.com/wp-content/uploads/2020/02/transfeera-banco-brasil.svg'},
        {code: '104',name: 'Caixa', urlimg: 'https://transfeera.com/wp-content/uploads/2020/02/transfeera-banco-caixa.svg'},
        {code: '237',name: 'Bradesco', urlimg: 'https://transfeera.com/wp-content/uploads/2020/02/transfeera-banco-bradesco.svg'},
        {code: '756',name: 'Sicoob', urlimg: 'https://transfeera.com/wp-content/uploads/2020/02/transfeera-banco-sicoob.svg'},
        {code: '341',name: 'Itaú', urlimg: 'https://transfeera.com/wp-content/uploads/2020/02/transfeera-banco-itau.svg'}
      
      ], {});
  
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Bank', null, {});
  }
};
