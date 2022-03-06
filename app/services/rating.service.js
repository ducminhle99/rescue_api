const db = require('../models/db');
const Rating = db.Rating
const User = db.User;
const StatisticService = require('./shopStatistic.service')

const createRating = async (req)=>{
    const userId = req.userId;
    const shopId = req.body.shopId;
    const rating = await Rating.create({
        rating: req.body.rating,
        comment: req.body.comment,
        userId: userId,
        shopId: shopId
    })
    const list = await Rating.findAll({
        where: { shopId : shopId }
    })
    await StatisticService.updateRating(shopId,list);
    return 'rating ok';
}
const getShopRating = async (id) =>{
    const list = await Rating.findAll({
        where: { shopId : id },
        include: {model: User, attributes:['id','fullName','imageUrl']}
    })
    return list;
}
module.exports ={
    createRating,
    getShopRating
}