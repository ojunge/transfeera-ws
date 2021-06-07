
 const router = require('express-promise-router')();
 const migrationController = require('../controllers/migration.controller');
  
 router.get('/', migrationController.migrate);
 
 module.exports = router;