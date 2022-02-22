const fileService = require('../../services/file.service');

exports.uploadFile = (req, res, next) => {
    fileService.uploadFile(req).then((data)=> {
        res.status(200).json(data);
    }).catch(next)
}
exports.deleteFile = (req, res, next) => {
    fileService.deleteFile(req.params.path).then((data)=> {
        res.status(200).json(data);
    }).catch(next)
}