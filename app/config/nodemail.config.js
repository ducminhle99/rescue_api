const nodemailer = require("nodemailer");
const config = require("../config/auth.config");

const user = config.mail;
const pass = config.pass;

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: user,
        pass: pass,
    },
});

module.exports.sendConfirmationEmail = (name, email, token) => {
    transport.sendMail({
        from: user,
        to: email,
        subject: "Please confirm your account",
        html: `<h1>Email Confirmation</h1>
        <h2>Hello ${name}</h2>
        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        <a href=https://rescueapi.herokuapp.com/api/auth/confirm/${token}> Click here</a>
        </div>`,
    }).catch(err => console.log(err));
};
