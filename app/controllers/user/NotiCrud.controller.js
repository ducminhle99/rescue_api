const userService = require('../../services/user.service');
const notificationService = require('../../services/notification.service');

exports.getAll = (req,res,next) => {
    notificationService.fetchNotiById(req.userId).then(data =>{
        res.status(200).json(data);
    }).catch(next);
}
