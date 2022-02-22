const testService = require('../../test/testShop');

exports.importData = (req, res, next) => {
    testService.createShop(req.body,1,2).then(data => {
        res.status(200).json(data)
    }).catch(next)
}
