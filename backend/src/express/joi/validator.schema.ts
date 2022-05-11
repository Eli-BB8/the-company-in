import * as Joi from 'joi';

export const companySchema = Joi.object({
    params: {
        domainName: Joi.string(),
    },
});
