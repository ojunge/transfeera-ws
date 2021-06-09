const service = require('../services/accountstype.service');
 
 exports.findAll = async (req, res) => {
   try {
    const result = await service.findAll();
    res.status(200).send(result);
   } catch (error) {
    res.status(500).send(error); 
   }

 };

 

 
 