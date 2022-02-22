const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require('../models/db');
const User = db.User;
const ConfirmMail = async  (token) =>{
    let userId = -1;
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) throw "Unauthorized";
        userId = decoded.id;
    });
    if(userId != -1) {
        const user = await getUser(userId);
        if(!user) throw 'can not find user';
        await user.setRoles(2);
    }
    return 'Confirm mail ok';
}
const getUser = async (id) => {
    const user = await User.findByPk(id);
    if (!user) throw 'user not found';
    return user;
}
module.exports ={ConfirmMail}