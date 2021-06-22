const  {BankAccountHolder}  = require('../models');
const  {Op}  = require('sequelize');
const util = require("../libraries/util");

exports.findAll = async (search) => {
   
if(search == undefined || search == ''|| search == null){
    return  BankAccountHolder.findAll({
      loggging: true,
    });
}
  const query  = '%' + search + '%';
  return  BankAccountHolder.findAll({
   raw: true,
   loggging: true,
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
  

  const item =  BankAccountHolder.build({ name: payload.name },
    { nif: payload.nif },
    { email: payload.email },
    { agency: payload.agency },
    { agencydigit: payload.agencydigit },
    { account: payload.account },
    { accountdigit: payload.accountdigit },
    { bankcode: payload.bankcode },
    { accounttypecode: payload.accounttypecode },
    { status: payload.status });

    console.log(item);
    item.save();
  
};

exports.update = async (payload,id) => {

  let obj = BankAccountHolder.findByPk(id);

  obj.name = payload.name;
  obj.nif = payload.nif;
  obj.email = payload.email;
  obj.agency = payload.agency;
  obj.agencydigit = payload.agencydigit;
  obj.account = payload.account;
  obj.accountdigit = payload.accountdigit;
  obj.bankcode = payload.bankcode;
  obj.accounttypecode = payload.accounttypecode;
  obj.status = payload.status;
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

 

 
 