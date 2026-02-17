import Joi from "joi";

export const profSchema = Joi.object({
   titre: Joi.string().min(3).max(40).required() ,
   competences: Joi.string().min(3).max(40).required() ,
   experiences_professionnelles: Joi.string().min(3).max(40).required() ,
   diplomes: Joi.string().min(3).max(40).required() ,
   langues: Joi.string().min(3).max(40).required()

})