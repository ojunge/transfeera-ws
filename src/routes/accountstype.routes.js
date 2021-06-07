
 const router = require('express-promise-router')();
 const accountsTypeController = require('../controllers/accountstype.controller');
  
 router.get('/', accountsTypeController.findAll);
 
 module.exports = router;