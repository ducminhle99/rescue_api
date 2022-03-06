const userService = require("../../services/user.service");

exports.updateUserRole = (req,res,next) =>{
    userService.updateUserRole(req).then(user => {
        res.status(200).json(user)
    }).catch(next)
}
exports.getById = (req,res,next) =>{
    userService.getById(req.params.id).then(user => {
        res.status(200).json(user)
    }).catch(next)
}
exports.deleteById = (req,res,next) =>{
    userService.deleteUser(req.params.id).then(user =>{
        res.status(200).json(user)
    }).catch(next)
}
