const db = require('../models/db');
const RepairShop = db.RepairShop;
const Address = db.Address;
const Category = db.Category;
const Service = db.Service;
const ShopStatistic = db.ShopStatistic;
const userService = require('./user.service')
const PaginationHelper = require('../helpers/paginationHelper');
const addressService = require("./address.service");
const {Op} = require("sequelize");

const getAllShop = async () => {
    const listShop = await RepairShop.findAll({
        attributes:['id','name','imageUrl','phone','notificationToken','rating'],
        include: [{model:Address,attributes:['id','latitude','longitude','name']},
            {model:Category,attributes:['id','catName']}]
    });
    return listShop;
}
const getById = async (id) => {
    const shop = await getShop(id);
    return shop;
}

const createShop = async (req) =>{
    const user = await userService.getUser(req.userId);

    const address = await addressService.createAddress(req.body.location);
    const shop = RepairShop.build({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        phone: user.phone,
        email:user.email,
        about:req.body.about,
        notificationToken: req.body.notificationToken
    });
    shop.addressId = address.id;
    shop.userId= user.id;
    user.setRoles([2,3]);
    await user.save();
    await shop.addCategories(1);
    await shop.save();
    await ShopStatistic.create({
        shopId: shop.id,
        rating: 0,
        review:0,
        numberOfService:0,
        numberOfRescue:0,
        numberOfAppointment:0
    })
    return shop;
}
const getCurrentShop = async (req) =>{
    const shop = await userService.getShopByUser(req);
    return shop;
}
const changeAbout = async  (req) =>{
    const id = req.userId;
    const shop = await RepairShop.findOne({where: {userId: id}});
    shop.about = req.body.about;
    shop.save();
    return 'ok';
}

module.exports ={
    getAllShop,
    getById,
    createShop,
    getCurrentShop,
    changeAbout,
}


//helper function
const getShop = async (id) =>{
    const shop = await RepairShop.findByPk(id,{
        include: [{model:Address,attributes:['id','latitude','longitude','name']},
            {model:Category,attributes:['id','catName']},
            {model:Service,attributes:['id','name','price','description']}
        ],
        attributes:['id','name','imageUrl','phone','email','about','rating','review'],
    });
    if(!shop) throw 'shop not found';
    return shop;
}