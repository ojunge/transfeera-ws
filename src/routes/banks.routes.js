
 const router = require('express-promise-router')();
 const banksController = require('../controllers/banks.controller');
  
 router.get('/', banksController.findAll);
 
 module.exports = router;