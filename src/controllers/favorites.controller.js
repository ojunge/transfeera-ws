const util = require('../libraries/util');
const validator = require('../validator/validator');
const service = require('../services/favorites.service');

 exports.findAll = async (req, res) => {
   try {
      const search = req.query.search;
      const result = await service.findAll(search);
      res.status(200).send(result); 
   } catch (error) {
      res.status(500).send(error); 
   }
 
 };

 exports.findById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await service.findById(id);
    res.status(200).send(result);

  } catch (error) {
    res.status(500).send(error); 
  }

};

 exports.create = async (req, res) => {
  try {
     const payload = req.body;
     const invalidFields = validator.validFavoriteForm(payload);
  
      if(invalidFields.length > 0){
        res.status(500).send({
          message: 'Favorite has invalid fields!',
          fields:invalidFields,
        });
        return;
      }    
      
    service.create(payload);
    
    res.status(201).send({
      message: 'Favorite added successfully!',
      body: {
        data:payload,
      },
    });

  }catch (error) {
    res.status(500).send(error); 
  }

};

exports.update = async (req, res) => {

  try {
    const favoriteId = parseInt(req.params.id);
    const payload = req.body;
    const invalidFields = validator.validFavoriteForm(payload);
 
     if(invalidFields.length > 0){
       res.status(500).send({
         message: 'Favorite has invalid fields!',
         fields:invalidFields,
       });
       return;
     }    
     service.update(payload);

    res.status(200).send({ message: 'Favorite Updated Successfully!' });

  } catch (error) {
    res.status(500).send(error); 
  }

};

exports.updateEmail = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { email} = req.body;
    
    if (!util.validateEmail(email)){
      res.status(500).send({ message: 'This is not a valid email!' });
      return;
    } 

    service.updateEmail(id,email);
    res.status(200).send({ message: 'Email changed Successfully!' });

  } catch (error) {
    res.status(500).send(error); 
  }

};

exports.delete = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await service.delete(id); 
    res.status(200).send({ message: 'Favorite deleted successfully!', favoriteId });
  } catch (error) {
    res.status(500).send(error); 
  }

};

 

 
 