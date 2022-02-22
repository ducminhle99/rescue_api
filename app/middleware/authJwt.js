const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');
const db = require('../models/db')
const User = db.User;

verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token'];
    if (!token) throw 'no token provided'

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) throw "Unauthorized";
        req.userId = decoded.id;
        next();
    })
}

isAdmin = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.userId);
        if (!user) throw "Unauthorized";
        const userRoles = await user.getRoles();
        for(let i = 0; i< userRoles.length; i++){
            if(userRoles[i].id === 1) {
                next();
                return;
            }
        }
        throw 'Require admin Role!';
    } catch (e) {
        next(e)
    }
};

isUser = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.userId);
        if (!user) throw "Unauthorized";
        const userRoles = await user.getRoles();
        for(let i = 0; i< userRoles.length; i++){
            if(userRoles[i].id === 2) {
                next();
                return;
            }
        }
        throw 'Require user Role!';
    } catch (e) {
        next(e)
    }
};
isProUser = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.userId);
        if (!user) throw "Unauthorized";
        const userRoles = await user.getRoles();
        for(let i = 0; i< userRoles.length; i++){
            if(userRoles[i].id === 3) {
                next();
                return;
            }
        }
        throw 'Require pro user Role!';
    } catch (e) {
        next(e)
    }
};

const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
    isUser: isUser,
    isProUser: isProUser
}
module.exports = authJwt;