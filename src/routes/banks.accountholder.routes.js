
 const router = require('express-promise-router')();
 const banksAccountHolderController = require('../controllers/banks.accountholder.controller');
 const Joi = require('joi');

 const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(255)
        .required(),
        nif: Joi.string()
        .regex(/^\d+$/)
        .min(11)
        .max(14)
        .required(),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
        agency: Joi.string()
        .min(1)
        .max(4)
        .required(),
        

});

 router.get('/', banksAccountHolderController.findAll);
 
 router.post('/', banksAccountHolderController.create);
 
 router.get('/:id', banksAccountHolderController.findById);
 
 router.put('/:id', banksAccountHolderController.update); 

 router.put('updateEmail/:id', banksAccountHolderController.updateEmail); 
 
 router.delete('/:id', banksAccountHolderController.delete);

 module.exports = router;