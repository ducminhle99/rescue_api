const {data} = require('../../public/data');
const db = require('../models/db');
const User = db.User;
const Address = db.Address;
const Shop = db.RepairShop;
const authService = require('../services/auth.service');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const nodemailer = require("../config/nodemail.config");
const createUser = async (params)  =>{
    // console.log(params)
    try {
        let user = await User.create({
            email: params.email,
            password: bcrypt.hashSync(params.password, 8),
            fullName: params.title,
            imageUrl: params.avatar,
            phone: params.phone,
        })
        await user.setRoles([2,3]);
        return user.id;
    } catch (err) {
        console.log(err);
        throw err;
    }
}
const createAddress = async (params) => {
    try {
        let address = await Address.create({
            name: params.address,
            latitude:params.latitude,
            longitude: params.longitude
        })
        return address.id;
    } catch (e) {
        console.log(e);
        throw e;
    }
}

const createShop = async (shopReq,uId,aId) => {
    console.log(shopReq)
    try {
        const shop =  await Shop.create({
            name: shopReq.name,
            imageUrl: shopReq.imageUrl,
            phone: shopReq.phone,
            email:shopReq.email,
        })
        shop.addressId=uId;
        shop.userId=aId;
        await shop.save();
        return shop;
    } catch (e) {
        console.log(e.errors[0]);
        throw e.errors[0];
    }
}

const importData = async (data) =>{
    const userId = await createUser(data);
    const addressId = await createAddress(data);
    await createShop({
        name: data.title,
        imageUrl: data.avatar,
        phone: data.phone,
        email:data.email,
    },userId,addressId)
}
exports.import = async () => {

    data.map( async (shop,index) => {
    if(shop.phone ==='')shop.phone = index+900000000;
    shop.email = `test${index}@gmail.com`;
    shop.password = '123456789';
    await importData(shop);
    })
    return 'import ok';
}