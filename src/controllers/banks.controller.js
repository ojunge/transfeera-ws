const service = require('../services/banks.service');
 
 exports.findAll = async (req, res) => {
  try {
    const search = req.query.search;
    console.log(search);
    const result = await service.findAll(search);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }

 };

 