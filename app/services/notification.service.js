const userService = require('./user.service')
const addressService = require('./address.service')
const db = require('../models/db');
const Notification = db.Notification;
const RepairShop = db.RepairShop;
const User = db.User;
const axios = require('axios');
const url = 'https://api.expo.dev/v2/push/send';

const createRescueNoti = async (rescue)=>{
   const shop = await RepairShop.findByPk(rescue.shopId);
   const token = shop.notificationToken;
   if(token) {
       await pushNoti(token, rescue);
       const noti = await  Notification.create({
           title: rescue.title,
           description: rescue.description,
           isClose: false,
           senderId: rescue.userId,
           receiver:rescue.shopId
       });
       return noti;
   }
   return ;

}
const createUtoS = async (title,data)=>{
    const shop = await RepairShop.findByPk(data.shopId);
    const token = shop.notificationToken;
    const message = { title: title,
        body: data.description,
        data: data
    }
    await pushNoti(token,message);
    const noti = await  Notification.create({
        title: title,
        description: data.description,
        isClose: false,
        senderId: data.userId,
        receiver:data.shopId
    });
    return noti;
}
const createStoU = async (title,data)=>{
    const user = await User.findByPk(data.userId);
    const token = user.notificationToken;
    const message = {
        title: title,
        body: data.description,
        data: data
    }
    await pushNoti(token,message);
    const noti = await  Notification.create({
        title: title,
        description: data.description,
        isClose: false,
        senderId: data.shopId,
        receiver:data.userId
    });
    return noti;
}

const pushNoti = async ( token, data) => {
        const message = {
            to: token,
            sound: 'default',
            title: data.title,
            body: data.description,
            data: data
        }
        await axios.post(url,message);
    return 'ok';
}
const fetchNotiById = async (id) => {
    const noti = await Notification.findAll({
        where: {receiver: id},
        order:  [['updatedAt', 'DESC']]
    })
    return noti;
}

module.exports = {
    createRescueNoti,
    pushNoti,
    fetchNotiById,
    createUtoS,
    createStoU
}