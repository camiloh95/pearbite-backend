const Joi = require('@hapi/joi');

module.exports = {
  save: Joi.object({
    name:            Joi.string().required(),
    description:     Joi.string().required(),
    betaVerificator: Joi.string().required(),
    videogameId:     Joi.string().required()
  }),
  
  update: Joi.object({
    _id:             Joi.string().required(),  
    name:            Joi.string().required(),
    description:     Joi.string().required(),
    betaVerificator: Joi.string().required()
  }),

  iterationId: Joi.string().required().label('iterationId'),

  videogameId: Joi.string().required().label('videogameId')
}