const testService = require('../../test/testImg');

exports.testImg = (req, res, next) => {
    testService.testImg(req).then(data => {
        res.status(200).json(data)
    }).catch(next)
}
