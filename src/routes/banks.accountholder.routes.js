
 const router = require('express-promise-router')();
 const banksAccountHolderController = require('../controllers/banks.accountholder.controller');
 const schemas = require('../routes//schema/banks.accountholder.schema');
 const Joi = require('joi');

 router.get('/', banksAccountHolderController.findAll);
 
 router.get('/:id', banksAccountHolderController.findById);

 router.post('/', async (req, res) => { 
      
    const result = schemas.create().validate(req.body); 
    if (result.error != null) { 
      res.status(422).json({ message: 'Invalid request', data: req.body }); 
    } else { 
      banksAccountHolderController.create(req, res); 
    } 
    
  });

 router.put('/:id',  async (req, res) => { 
      
    const result = schemas.update().validate(req.body); 
    if (result.error != null) { 
        res.status(422).json({ message: 'Invalid request', data: req.body }); 
    } else { 
      banksAccountHolderController.update(req, res); 
    } 
  });
 
 router.put('updateEmail/:id', async (req, res) => { 
     
    const result = schema.updateEmail().validate(req.body); 
    if (result.error != null) { 
      res.status(422).json({ message: 'Invalid request', data: req.body }); 
    } else { 
     banksAccountHolderController.updateEmail(req, res); 
    } 
  });

 router.delete('/:id', banksAccountHolderController.delete);

 module.exports = router;