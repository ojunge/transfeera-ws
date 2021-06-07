const service = require('../services/banks.service');
 
 exports.findAll = async (req, res) => {
   const result = await service.findAll();
   res.status(200).send(result);
 };

 

 
 