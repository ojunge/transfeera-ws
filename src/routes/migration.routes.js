
 const router = require('express-promise-router')();
 const migrationController = require('../controllers/migration.controller');
  
 // ==> Rota responsável por listar todos os 'Products': (GET): localhost:3000/api/products
 router.get('/', migrationController.migrate);
 
 module.exports = router;