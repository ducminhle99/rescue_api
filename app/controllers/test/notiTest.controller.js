const testService = require('../../services/notification.service');

exports.notification = (req, res, next) => {
    testService.createNoti(req).then(data => {
        res.status(200).json(data)
    }).catch(next)
}
