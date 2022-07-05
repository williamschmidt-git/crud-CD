import Joi from 'joi';

export default Joi.object({
  dscProduto: Joi.string().required()
    .messages({
      'any.required': '400|Todos os campos são obrigatórios',
    }),
  vlrUnitario: Joi.number().required()
    .messages({
      'any.required': '400|Todos os campos são obrigatórios',
    }),
});