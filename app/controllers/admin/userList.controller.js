const userService = require('../../services/user.service');

exports.getAllUser = (req, res, next) => {
    userService.getAllAdmin().then(userList => {
        res.status(200).json(userList)
    }).catch(next)
}

