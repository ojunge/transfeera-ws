const  {Bank}  = require('../models');
const  {Op}  = require('sequelize');

exports.findAll = async (search) => {

  if(search == undefined || search == ''|| search == null){
    return  Bank.findAll({
      loggging: true,
    });
  }

   const query  = '%' + search + '%';
   console.log("chegou");
   return  Bank.findAll({
    loggging: true,
    where: {
      [Op.or]: 
      [ 
        { "code": { [Op.like]: query } } ,  
        { "name": { [Op.like]: query } } 
      ]
    }
  });
};




