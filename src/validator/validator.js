const util = require('../libraries/util');

module.exports = {

  validFavoriteForm: (data)=> {
    let invalidFields =  [];
    if(util.isEmpty(data.name))
        invalidFields.push('The field name is empty');
    if(!util.isNif(data.nif))
        invalidFields.push('The field nif is not valid');
    if(!util.validateAgency(data.agency,data.agencyDigit,data.bankCode))
        invalidFields.push('The fields agency or agencyDigit are not valids');
    if(!util.validateAccount(data.account,data.accountDigit,data.bankCode))
        invalidFields.push('The fields account or accountDigit are not valids');
    if(util.isEmpty(data.bankCode))
        invalidFields.push('The field bankCode is empty');
    if(util.isEmpty(data.accountTypeCode))
        invalidFields.push('The field accountTypeCode is empty');
    if(util.isEmpty(data.status)|| (data.status != 'V' && data.status != 'R' ))
        invalidFields.push('The field status is empty or not valid');

    
    return invalidFields;
  }
   
};
