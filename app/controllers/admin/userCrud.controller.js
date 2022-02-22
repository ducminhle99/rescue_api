const userService = require("../../services/user.service");

exports.updateUserRole = (req,res,next) =>{
    userService.updateUserRole(req).then(user => {
        res.status(200).json(user)
    }).catch(next)
}
