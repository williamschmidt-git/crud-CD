import Joi from 'joi';

const ERROR_MESSAGE = 'Todos os campos são obrigatórios';

export default Joi.object({
  nmCliente: Joi.string().required().empty()
    .messages({
      'any.required': `400|${ERROR_MESSAGE}`,
      'string.empty': `400|${ERROR_MESSAGE}`,
    }),
  cidade: Joi.string().required().empty()
    .messages({
      'any.required': `400|${ERROR_MESSAGE}`,
      'string.empty': `400|${ERROR_MESSAGE}`,
    }),
});