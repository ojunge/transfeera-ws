const service = require('../services/banks.service');
 
 exports.findAll = async (req, res) => {
  try {
    const result = await service.findAll();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }

 };

 