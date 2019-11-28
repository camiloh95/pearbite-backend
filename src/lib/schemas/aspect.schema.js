const Joi = require('@hapi/joi');

module.exports = {
  save: Joi.object({
    name:        Joi.string().required(),
    description: Joi.string().required(),
    iterationId: Joi.string().required()
  })
}