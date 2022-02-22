const testService = require('../../test/importData');

exports.importData = (req, res, next) => {
    testService.import().then(data => {
        res.status(200).json(data)
    }).catch(next)
}
