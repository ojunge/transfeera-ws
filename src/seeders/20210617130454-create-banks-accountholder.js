'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('banks_account_holder', [
      {name: 'João da Silva',nif: '72385156016', email: 'joao@gmail.com',agency: '0001',agencyDigit:'0',account: '258353', accountDigit:'4', bankCode: '237', accountTypeCode: 'CC', status:'R',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Alan dos Santos',nif: '96104562000', email: 'alan@gmail.com',agency: '7855',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '756', accountTypeCode: 'CP', status:'R',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'John Wick',nif: '98756157061', email: 'john.wick@gmail.com',agency: '2343',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '756', accountTypeCode: 'CF', status:'V',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Darth Vader',nif: '11050517067', email: 'darth.vader@gmail.com',agency: '2234',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '237', accountTypeCode: 'CF', status:'V',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'John McClane',nif: '85091680080', email: 'john.mcclane@gmail.com',agency: '7765',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '756', accountTypeCode: 'CC', status:'V',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'James Bond',nif: '52236176066', email: 'james.bond@gmail.com',agency: '0876',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '104', accountTypeCode: 'CC', status:'V',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Michael Corleone',nif: '58232027096', email: 'michael.corleone@gmail.com',agency: '0814',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '756', accountTypeCode: 'CF', status:'V',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Tony Stark',nif: '36849064096', email: 'tony.stark@gmail.com',agency: '0876',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '104', accountTypeCode: 'CC', status:'V',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Jack Sparrow',nif: '30501613021', email: 'jack.sparrow@gmail.com',agency: '9541',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '104', accountTypeCode: 'CC', status:'R',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Hannibal Lecter',nif: '49893995019', email: 'hannibal.lecter@gmail.com',agency: '0814',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '237', accountTypeCode: 'CF', status:'R',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Forrest Gump',nif: '89068189042', email: 'forrest.gump@gmail.com',agency: '0001',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '237', accountTypeCode: 'CP', status:'R',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Rocky Balboa',nif: '99706243003', email: 'rocky.balboa@gmail.com',agency: '1256',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '237', accountTypeCode: 'CC', status:'R',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Yoda',nif: '87510830001', email: 'yoda.jedi@gmail.com',agency: '7765',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '237', accountTypeCode: 'CC', status:'V',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Marvel Corporation S/A',nif: '35525380030', email: 'marvel@gmail.com',agency: '8246',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '756', accountTypeCode: 'CC', status:'R',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Avengers Corporation S/A',nif: '56202172053', email: 'avengers@gmail.com',agency: '0814',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '237', accountTypeCode: 'CF', status:'R',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Skynet S/A',nif: '29933084089', email: 'skynet@gmail.com',agency: '0814',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '237', accountTypeCode: 'CC', status:'V',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'DC Comics',nif: '45265592024', email: 'dc.comics@gmail.com',agency: '0814',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '237', accountTypeCode: 'CC', status:'R',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Optimus Prime',nif: '88325233028', email: 'optimus.prime@gmail.com',agency: '0876',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '756', accountTypeCode: 'CF', status:'R',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Sheldon Cooper',nif: '96849319051', email: 'sheldon.cooper@gmail.com',agency: '4523',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '756', accountTypeCode: 'CP', status:'R',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Sherlock Holmes',nif: '08985256084', email: 'sherlock.holmes@gmail.com',agency: '0814',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '756', accountTypeCode: 'CC', status:'R',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Will Smith',nif: '24957553050', email: 'will.smith@gmail.com',agency: '0814',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '237', accountTypeCode: 'CC', status:'R',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Harry Potter',nif: '04850124054', email: 'harry.potter@gmail.com',agency: '0814',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '237', accountTypeCode: 'CP', status:'R',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Ethan Hunt',nif: '77280675085', email: 'ethan.hunt@gmail.com',agency: '9235',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '001', accountTypeCode: 'CC', status:'R',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Michael Jackson',nif: '45378577063', email: 'michael.jackson@gmail.com',agency: '3654',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '001', accountTypeCode: 'CC', status:'R',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Bob Marley',nif: '94513131098', email: 'bob.marley@gmail.com',agency: '8809',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '001', accountTypeCode: 'CC', status:'R',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Avril Lavigne',nif: '20171305086', email: 'avril.lavigne@gmail.com',agency: '4547',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '001', accountTypeCode: 'CC', status:'R',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Snoop Dog',nif: '01655578006', email: 'snoop.dog@gmail.com',agency: '8765',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '001', accountTypeCode: 'CC', status:'R',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Steve Wonder',nif: '27773506043', email: 'steve.wonder@gmail.com',agency: '1236',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '001', accountTypeCode: 'CC', status:'R',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Kanye West',nif: '33328826009', email: 'kanye.west@gmail.com',agency: '0798',agencyDigit:'0',account: '0092847', accountDigit:'4', bankCode: '001', accountTypeCode: 'CC', status:'R',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Tupac Shakur',nif: '31204127085', email: 'tupac.shakur@gmail.com',agency: '0987',agencyDigit:'0',account: '0092847', accountDigit:'9', bankCode: '001', accountTypeCode: 'CC', status:'R',  createdAt: new Date(),updatedAt: new Date()},
      {name: 'Arnold Schwarzenegger',nif: '56780814032', email: 'arnold.schwarzenegger@gmail.com',agency: '0001',agencyDigit:'0',account: '0092847', accountDigit:'4', bankCode: '001', accountTypeCode: 'CC', status:'R',  createdAt: new Date(),updatedAt: new Date()}
  
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('banks_account_holder', null, {});
  }
};
