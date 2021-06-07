const service = require('../services/accountstype.service');
 
 exports.findAll = async (req, res) => {
   const result = await service.findAll();
   res.status(200).send(result);
 };

 

 
 