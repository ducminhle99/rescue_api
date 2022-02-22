
const db = require('../models/db');
const Service = db.Service;
const RepairShop = db.RepairShop;
const Category = db.Category;

const getAll = async (req)=>{
    const list = await Service.findAll({
        where:{
            shopId: req.id
        },
        include:{model: Category,attributes:['id','catName']}
    });
    return list;
}
const createService = async (req) =>{
    const {userId} = req;
    const shop = await RepairShop.findOne({
        where:{
            userId : userId
        }
    })
    if(!shop) throw 'shop not found';
    const service = await Service.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        shopId: shop.id
    })
    await service.addCategories(req.body.catId)
    console.log(service);
    await service.save();
    return service;
}
const deleteService = async (req) => {
    const userId = req.userId;
    const shop = await RepairShop.findOne({
        where:{
            userId : userId
        }
    })
    if(!shop) throw 'user is not a repair shop';
    const serviceId = req.params.id;
    const service = await Service.findByPk(serviceId);
    if(service.shopId == shop.id ) service.destroy();
    else throw 'cannot find this service';
    return 'ok';

}
module.exports = {
    getAll,
    createService,
    deleteService
}