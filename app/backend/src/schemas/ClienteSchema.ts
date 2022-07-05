import Joi from 'joi';

export default Joi.object({
  nmCliente: Joi.string().required()
    .messages({
      'any.required': '400|Todos os campos são obrigatórios',
    }),
  cidade: Joi.string().required()
    .messages({
      'any.required': '400|Todos os campos são obrigatórios',
    }),
});