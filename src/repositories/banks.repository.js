const  {Bank}  = require('../models');
const  {Op}  = require('sequelize');

exports.findAll = async (search) => {

  if(search == undefined || search == ''|| search == null){
    return  Bank.findAll({
      loggging: false,
    });
  }

   const query  = '%' + search + '%';
   return  Bank.findAll({
    loggging: false,
    where: {
      [Op.or]: 
      [ 
        { "code": { [Op.like]: query } } ,  
        { "name": { [Op.like]: query } } 
      ]
    }
  });
};




