const userService = require('./user.service')
const addressService = require('./address.service')
const db = require('../models/db');
const UpgradeRequest = db.UpgradeRequest;

const getAll = async ()=>{
    const listReq = await UpgradeRequest.findAll();
    return listReq;
}

module.exports = {
    getAll
}