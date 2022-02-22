const upgradeReqService = require('../../services/upgradeReq.service');

exports.getAll = (req, res, next) => {
    upgradeReqService.getAll().then(listReq => {
        res.status(200).json(listReq)
    }).catch(next)
}

