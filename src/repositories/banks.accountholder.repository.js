const  {BankAccountHolder}  = require('../models');
const  {Op}  = require('sequelize');

exports.findAll = async (search) => {
   
if(search == undefined || search == ''|| search == null){
    return  BankAccountHolder.findAll({
      loggging: false,
    });
}
  const query  = '%' + search + '%';
  return  BankAccountHolder.findAll({
   raw: true,
   loggging: false,
   where: {
     [Op.or]: 
     [ 
       { "name": { [Op.like]: query } } ,
       { "agency": { [Op.like]: query } } ,
       { "account": { [Op.like]: query } } ,  
       { "nif": { [Op.like]: query } } 
     ]
   }
 });
};

 exports.findById = async (id) => {
    return BankAccountHolder.findByPk(id);
  };

 exports.create = async (payload) => {
  
  BankAccountHolder.create(
    { name: payload.name ,
     nif: payload.nif ,
     email: payload.email ,
     agency: payload.agency ,
     agencyDigit: payload.agencyDigit ,
     account: payload.account ,
     accountDigit: payload.accountDigit,
     bankCode: payload.bankCode ,
     accountTypeCode: payload.accountTypeCode ,
     status: payload.status,
     createdAt: new Date(),
     updatedAt: new Date() });
    
  
};

exports.update = async (payload,id) => {

  let obj = BankAccountHolder.findByPk(id);

  obj.name = payload.name;
  obj.nif = payload.nif;
  obj.email = payload.email;
  obj.agency = payload.agency;
  obj.agencyDigit = payload.agencyDigit;
  obj.account = payload.account;
  obj.accountDigit = payload.accountDigit;
  obj.bankCode = payload.bankCode;
  obj.accountTypeCode = payload.accountTypeCode;
  obj.status = payload.status;
  obj.updatedAt = new Date();
  obj.save();

};

exports.updateEmail = async (id, email) => {

  let obj = BankAccountHolder.findByPk(id);
  obj.email = email;
  obj.save();
  return true;
};

exports.delete = async (id) => {
  BankAccountHolder.destroy({
    where: {
       id: id
    }
 });
  return true;
};

 

 
 