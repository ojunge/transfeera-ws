const moment = require('moment');  

module.exports = {

  isEmpty: (value)=> {
    if(value === undefined || value == null)
      return true;
      
    var regExpVerifyLetters = /[a-zA-Z]/g;
    var regExpVerifyNumbers =  /\d/;

    if(regExpVerifyLetters.test(value) || regExpVerifyNumbers.test(value))
      return false;
    return true;
  },
  isNif: (value)=> {
    const nif = value.replace(/\D/g, ""); 
    if(nif.length == 11 || nif.length == 14)
      return true;
    return false;
  },  
  isAgency: (value)=> {
    const agency = value.replace(/\D/g, ""); 
    if(agency.length == 4)
      return true;
    return false;
  },
  isAccount: (value)=> {
    const agency = value.replace(/\D/g, ""); 
    if(agency.length == 8)
      return true;
    return false;
  },
  paginate: (total, list, index, size)=> {
    const pagination = { total: total, data: list, index:index, size: size}
    return pagination;
  }    
   

};
