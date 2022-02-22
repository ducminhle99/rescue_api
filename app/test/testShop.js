const db = require('../models/db');
const Shop = db.RepairShop;
exports.createShop = async (shopReq,uId,aId) => {
    try {
        const shop =  await Shop.create({
            name: shopReq.name,
            imageUrl: shopReq.imageUrl,
            phone: shopReq.phone,
            email:shopReq.email,
            addressId: aId,
            userId:uId
        })
        console.log(shop);
        return shop;
    } catch (e) {
        console.log(e);
        throw e;
    }
}
