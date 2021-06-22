'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('banks', [
        {code: '001',name: 'Banco do Brasil', urlimg: 'https://transfeera.com/wp-content/uploads/2020/02/transfeera-banco-brasil.svg', createdAt: new Date(),updatedAt: new Date()},
        {code: '104',name: 'Caixa', urlimg: 'https://transfeera.com/wp-content/uploads/2020/02/transfeera-banco-caixa.svg', createdAt: new Date(),updatedAt: new Date()},
        {code: '237',name: 'Bradesco', urlimg: 'https://transfeera.com/wp-content/uploads/2020/02/transfeera-banco-bradesco.svg', createdAt: new Date(),updatedAt: new Date()},
        {code: '756',name: 'Sicoob', urlimg: 'https://transfeera.com/wp-content/uploads/2020/02/transfeera-banco-sicoob.svg', createdAt: new Date(),updatedAt: new Date()},
        {code: '341',name: 'Itaú', urlimg: 'https://transfeera.com/wp-content/uploads/2020/02/transfeera-banco-itau.svg', createdAt: new Date(),updatedAt: new Date()}
      
      ], {});
  
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('banks', null, {});
  }
};
