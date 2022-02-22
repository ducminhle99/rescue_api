const Joi = require('joi');
const validateRequest = require("./validateRequest");

exports.registerSchema = (req,res,next) =>{
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required(),
        fullName: Joi.string().required(),
        phone: Joi.string().required(),
        notificationToken: Joi.string()
    });
    validateRequest(req,next,schema);
}
exports.loginSchema = (req,res,next) =>{
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    });
    validateRequest(req,next,schema);
}
exports.updateUser = (req,res,next) =>{
    const schema = Joi.object({
        fullName: Joi.string().empty(''),
        email: Joi.string().empty('').email(),
        phone: Joi.string().empty(''),
        imageUrl: Joi.string()
    });
    validateRequest(req,next,schema);
}
// exports.updateImages = (req,res,next) =>{
//     const schema = Joi.object({
//         fileName: Joi.string().empty('')
//     });
//     validateRequest(req,next,schema);
// }