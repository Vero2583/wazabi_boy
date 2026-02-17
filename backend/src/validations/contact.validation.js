import Joi from "joi";

export const contactSchema = Joi.object({
    name: Joi.string().min(3).max(40).required(),
    prenom: Joi.string().min(3).max(40).required(),
    adresse: Joi.string().min(3).max(40).required(),
    telephonne: Joi.number().required(),
    email: Joi.string().min(3).max(40).required(),
    reseaux: Joi.string().min(3).max(40).required(),
    loisirs: Joi.string().min(3).max(40).required(),
    id_professionnel: Joi.number().required()

})