const db = require('../models/db');
const ShopStatistic = db.ShopStatistic;


const getStatistic = async (id) =>{
    const statistic = await ShopStatistic.findOne({
        where : {shopId: id}
    })
    return statistic;
}
const increaseAppointment = async (id) =>{
    const statistic = await ShopStatistic.findOne({
        where : {shopId: id}
    })
    await statistic.increment('numberOfAppointment',{ by: 1 })
}
const increaseRescue = async (id) =>{
    const statistic = await ShopStatistic.findOne({
        where : {shopId: id}
    })
    await statistic.increment('numberOfRescue',{ by: 1 })
}
const increaseService = async (id) =>{
    const statistic = await ShopStatistic.findOne({
        where : {shopId: id}
    })
    await statistic.increment('numberOfService',{ by: 1 })
}
const decreaseService = async (id) =>{
    const statistic = await ShopStatistic.findOne({
        where : {shopId: id}
    })
    await statistic.decrement('numberOfService',{ by: 1 })
}
const increaseReview = async (id) =>{
    const statistic = await ShopStatistic.findOne({
        where : {shopId: id}
    })
    await statistic.increment('review',{ by: 1 })
}
const increaseRating = async (id) =>{
    const statistic = await ShopStatistic.findOne({
        where : {shopId: id}
    })
    await statistic.increment('rating',{ by: 1 })
}

module.exports ={
    getStatistic,
    increaseRating,
    increaseReview,
    increaseService,
    decreaseService,
    increaseAppointment,
    increaseRescue
}
