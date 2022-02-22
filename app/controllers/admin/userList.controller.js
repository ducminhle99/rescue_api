const userService = require('../../services/user.service');

exports.getAllUser = (req, res, next) => {
    userService.getAll(req.params).then(userList => {
        res.status(200).json(userList)
    }).catch(next)
}
