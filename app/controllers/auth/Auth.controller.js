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
        res.status(200).send("<!DOCTYPE html>\n" +
            "<html>\n" +
            "<head>\n" +
            "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
            "<style>\n" +
            "body, html {\n" +
            "  height: 100%;\n" +
            "  margin: 0;\n" +
            "  font-family: Arial, Helvetica, sans-serif;\n" +
            "}\n" +
            "\n" +
            "* {\n" +
            "  box-sizing: border-box;\n" +
            "}\n" +
            "\n" +
            ".bg-image {\n" +
            "  /* The image used */\n" +
            "  background-image: url('../../../uploads/welcome.jpg');\n" +
            "  \n" +
            "  /* Add the blur effect */\n" +
            "  filter: blur(8px);\n" +
            "  -webkit-filter: blur(8px);\n" +
            "  \n" +
            "  /* Full height */\n" +
            "  height: 100%; \n" +
            "  \n" +
            "  /* Center and scale the image nicely */\n" +
            "  background-position: center;\n" +
            "  background-repeat: no-repeat;\n" +
            "  background-size: cover;\n" +
            "}\n" +
            "\n" +
            "/* Position text in the middle of the page/image */\n" +
            ".bg-text {\n" +
            "  background-color: rgb(0,0,0); /* Fallback color */\n" +
            "  background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */\n" +
            "  color: white;\n" +
            "  font-weight: bold;\n" +
            "  border: 3px solid #f1f1f1;\n" +
            "  position: absolute;\n" +
            "  top: 50%;\n" +
            "  left: 50%;\n" +
            "  transform: translate(-50%, -50%);\n" +
            "  z-index: 2;\n" +
            "  width: 80%;\n" +
            "  padding: 20px;\n" +
            "  text-align: center;\n" +
            "}\n" +
            "</style>\n" +
            "</head>\n" +
            "<body>\n" +
            "\n" +
            "<div class=\"bg-image\"></div>\n" +
            "\n" +
            "<div class=\"bg-text\">\n" +
            "  <h1 style=\"font-size:50px\">Đăng ký thành công!</h1>\n" +
            "    <h2>Đăng nhập trên thiết bị để sử dụng</h2>\n" +
            "\n" +
            "</div>\n" +
            "\n" +
            "</body>\n" +
            "</html>")
    }).catch(next)
}

