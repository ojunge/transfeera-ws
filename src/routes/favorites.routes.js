
 const router = require('express-promise-router')();
 const favoritesController = require('../controllers/favorites.controller');
  
 router.get('/', favoritesController.findAll);
 
 router.post('/', favoritesController.create);
 
 router.get('/:id', favoritesController.findById);
 
 router.put('/:id', favoritesController.update); 

 router.put('updateEmail/:id', favoritesController.updateEmail); 
 
 router.delete('/:id', favoritesController.delete);

 module.exports = router;