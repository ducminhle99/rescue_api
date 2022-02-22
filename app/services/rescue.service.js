const userService = require('./user.service')
const addressService = require('./address.service')
const shopService = require('./shop.service');
const notificationService = require('./notification.service');
const db = require('../models/db');
const Rescue = db.Rescue;
const Address = db.Address;
const User = db.User;
const getDistance = require('./../helpers/getDistance');

const createListRescue = async (req) =>{
    const userId = req.userId;
    const listShop =  req.body.shops;
    listShop.map( async (shopId) =>{
        await createOne({
            userId: userId,
            location: req.body.location,
            description: req.body.description,
            title: req.body.title,
            isClose: false,
            shopId: shopId
        })
    })
    return 'ok';
}
const createRescue = async (req)=>{
    const userId = req.userId;
        await createOne({
            userId: userId,
            location: req.body.location,
            description: req.body.description,
            title: req.body.title,
            isClose: false,
            shopId: req.body.shopId
        })
    return 'ok';
}
const createOne = async  (data) =>{
    const address = await addressService.createAddress(data.location);
    const rescue = Rescue.build({
        title: data.title,
        description: data.description,
        isClose: false,
        shopId: data.shopId
    });
    // console.log(rescue);
    rescue.addressId = address.id;
    rescue.userId = data.userId;
    await rescue.save();
    await notificationService.createRescueNoti(rescue);
    return rescue
}
const getAll = async () =>{
    const list = await Rescue.findAll({
        include: [{model: User, attributes:['id','fullName','imageUrl','phone']},
            Address],
        order:  [['updatedAt', 'DESC']]
    })
    return list
}
const getAllByShop = async (id) =>{
    const list = await Rescue.findAll({
        where:{shopId : id},
        include: [{model: User, attributes:['id','fullName','phone']},
            Address],
        order:  [['updatedAt', 'DESC']]
    })
    return list
}
const getById = async (id) =>{
    const rescue = await Rescue.findByPk(id,{
        include: [{model: User, attributes:['id','fullName','imageUrl']},
            Address],
    })
    return rescue
}
const acceptRescue = async (id) => {
    const rescue = await  Rescue.findByPk(id);
    if(!rescue) throw 'rescue not exists'
    rescue.isClose = true;
    await rescue.save();
    const userId = rescue.userId;
    const list = await Rescue.findAll({
        where: {
            userId: userId,
            isClose: false
        }
    })
    const listId = list.map(rescue => rescue.id);
    await Rescue.destroy({
        where: {
            id: listId
        }
    })
    await notificationService.createStoU('Yêu cầu cứu hộ được tiếp nhận',rescue);
    return 'ok';
}
const deleteRescue = async (id) => {
    const rescue = await  Rescue.findByPk(id);
    if(!rescue) throw 'rescue not exists'
    await rescue.destroy();
    return 'ok';
}
module.exports = {
    createRescue,
    getAll,
    getAllByShop,
    createListRescue,
    getById,
    acceptRescue,
    deleteRescue
}