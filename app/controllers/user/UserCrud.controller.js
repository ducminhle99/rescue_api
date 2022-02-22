const userService = require('../../services/user.service');
const rescueService = require('../../services/rescue.service');

exports.getUserDetail = (req,res,next) => {
    userService.getById(req.params.id).then(user =>{
        res.status(200).json(user);
    }).catch(next);
}
exports.getCurrentUser = (req,res,next) =>{
    userService.getCurrentUser(req).then(user =>{
        res.status(200).json(user);
    }).catch(next);
}

exports.getAllUser = (req, res, next) => {
    userService.getAll(req.query).then(userList => {
        res.status(200).json(userList)
    }).catch(next)
}
exports.updateUser = (req, res, next) => {
    userService.updateUser(req).then((user)=> {
        res.status(200).json(user);
    }).catch(next)
}
exports.updateAvatar = (req, res, next) => {
    userService.updateAvatar(req).then(()=> {
        res.status(200).json('update avatar successful');
    }).catch(next)
}

exports.upgradeUser = (req,res,next)=>{
    userService.upgradeUser(req).then(() => {
        res.status(200).json("ok")
    }).catch(next);
}

