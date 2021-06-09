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
    if(value === undefined || value == null)
      return false;
    const nif = value.replace(/\D/g, ""); 
    if(nif.length == 11 || nif.length == 14)
      return true;
    return false;
  },  
  isAgency: (value)=> {
    if(value === undefined || value == null)
      return false;
    const agency = value.replace(/\D/g, ""); 
    if(agency.length == 4)
      return true;
    return false;
  },
  isAccount: (value)=> {
    if(value === undefined || value == null)
      return false;
    const agency = value.replace(/\D/g, ""); 
    if(agency.length == 8)
      return true;
    return false;
  },
  paginate: (total, list, index, size)=> {
    const pagination = { total: total, data: list, index:index, size: size}
    return pagination;
  },
  
  validateAccount: (account, digit, codeBank)=> {
    const ACCOUNT_BB =  /^(?:^0*)[1-9][0-9]{0,7}$/;
    const ACCOUNT_DIGIT_BB =  /^[xX0-9]{0,1}$/;

    const ACCOUNT_OTHER =  /^(?:^0*)[1-9][0-9]{0,10}$/;
    const ACCOUNT_DIGIT_OTHER =  /^[0-9]{0,1}$/;
    
    if(codeBank === '001'){
       return ((ACCOUNT_BB.test(account)) && (ACCOUNT_DIGIT_BB.test(digit)));
    }else{
       return ((ACCOUNT_OTHER.test(account)) && (ACCOUNT_DIGIT_OTHER.test(digit)));
    }
  },

  validateAgency: (agency, digit, codeBank)=> {

    const AGENCY_BB =  /^(?:^0*)[1-9][0-9]{0,3}$/;
    const AGENCY_DIGIT_BB =  /^(?:^0*)[1-9][0-9]{0,3}$/;

    const AGENCY_OTHER =  /^(?:^0*)[1-9][0-9]{0,3}$/;
    const AGENCY_DIGIT_OTHER =  /^[xX0-9]{0,1}$/;

    if(codeBank === '001'){
        return ((AGENCY_BB.test(agency)) && (AGENCY_DIGIT_BB.test(digit)));
    }else{
      return ((AGENCY_OTHER.test(agency)) && (AGENCY_DIGIT_OTHER.test(digit)));
    }
  },

  validateEmail: (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }   
   
};
