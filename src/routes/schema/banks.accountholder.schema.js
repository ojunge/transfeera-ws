const Joi = require('joi');

module.exports = {

    updateEmail: ()=> {
        return  Joi.object().keys({ 
            email: Joi.string()
            .email({ tlds: { allow: false } })
            .required()});
      },
      create: ()=> {
        return  Joi.object({
            name: Joi.string()
                .min(3)
                .max(255)
                .required(),
            nif: Joi.string()
                .regex(/^\d+$/)
                .min(11)
                .max(14)
                .required(),
            email: Joi.string()
                .email({ tlds: { allow: false } })
                .required(),
            agency: Joi.string()
                .min(1)
                .max(4)
                .required(), 
            agencyDigit: Joi.string()
                .min(1)
                .max(1)
                .required(),  
            account: Joi.string()
                .min(1)
                .max(8)
                .regex(/^\d+$/)
                .required(),         
            accountDigit: Joi.string()
                .min(1)
                .max(1)
                .required(),    
            accountTypeCode: Joi.string()
                .min(2)
                .max(2)
                .required(),
            status: Joi.string()
                .min(1)
                .max(1)
                .required(),                          
        });
      },

      update: ()=> {
        return  Joi.object({
            name: Joi.string()
                .min(3)
                .max(255)
                .required(),
            nif: Joi.string()
                .regex(/^\d+$/)
                .min(11)
                .max(14)
                .required(),
            email: Joi.string()
                .email({ tlds: { allow: false } })
                .required(),
            agency: Joi.string()
                .min(1)
                .max(4)
                .required(), 
            agencyDigit: Joi.string()
                .min(1)
                .max(1)
                .required(),  
            account: Joi.string()
                .min(1)
                .max(8)
                .regex(/^\d+$/)
                .required(),         
            accountDigit: Joi.string()
                .min(1)
                .max(1)
                .required(),    
            accountTypeCode: Joi.string()
                .min(2)
                .max(2)
                .required(),
            status: Joi.string()
                .min(1)
                .max(1)
                .required(),                          
        });
      }
};