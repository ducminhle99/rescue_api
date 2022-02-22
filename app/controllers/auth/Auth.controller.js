const authService = require('../../services/auth.service');
const mailService = require('../../services/mail.service');


exports.register = (req, res,next) => {
    authService.register(req.body).then(message =>{
        res.status(200).json(message);
    }).catch(next);
}
exports.login = (req, res,next) => {
    authService.login(req.body).then(accRes => {
        res.status(200).json(accRes);
    }).catch(next)
}
exports.confirmCode = (req, res,next) => {
    mailService.ConfirmMail(req.params.token).then(confirmRes => {
        res.status(200).send("<html> <head>Cứu hộ 24</head><body><h1>Đăng ký tài khoảng thành công, hãy đăng nhập và sử dụng trên ứng dụng</h1></body></html>")
    }).catch(next)
}

