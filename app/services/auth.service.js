const db = require('../models/db');
const config = require("../config/auth.config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = db.User;
const RepairShop = db.RepairShop;
const userService = require('../services/user.service')

const nodemailer = require('../config/nodemail.config');


const register = async (params) => {

    const checkEmail = await User.findOne({where: {email: params.email}})
    if (checkEmail) throw "email is already taken";

    const checkPhone = await User.findOne({where: {phone: params.phone}})
    if (checkPhone) throw "phone is already taken";

    try {
        let user = await User.create({
            email: params.email,
            password: bcrypt.hashSync(params.password, 8),
            fullName: params.fullName,
            imageUrl: 'default-avt.jpg',
            phone: params.phone,
            notificationToken: params.notificationToken
        })
        await user.setRoles([4]);

        const token = jwt.sign({id: user.id}, config.secret, {
            expiresIn: 86400,
        });

        nodemailer.sendConfirmationEmail(
            user.fullName,
            user.email,
            token,
        );
        return  "User was registered successfully! Please check your email";

    } catch (err) {
        console.log(err.errors[0]);
        throw err.errors[0];
    }
}
const login = async (params) => {
    const user = await User.findOne({
        where: {
            email: params.email
        }
    })
    if(!user) throw "user not found";
    const checkPass = await bcrypt.compareSync(params.password,user.password);
    if(!checkPass) throw "Invalid Password!";

    const token = jwt.sign({id: user.id}, config.secret, {
        expiresIn: '30d',
    });
    let authorities = await user.getRoles();

    if(authorities.find((role) =>role.id == 4)) throw "user is not active";

    let roles = [];
    authorities.map(role => {
        roles.push("ROLE_" + role.roleType.toUpperCase());
    })
    const userRes = await userService.getUser(user.id);
    return {...userRes.get(),accessToken: token, roles}
}

module.exports = {
    register,
    login
}