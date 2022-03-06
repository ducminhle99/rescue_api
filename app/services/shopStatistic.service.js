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

const updateRating = async (id, list) => {
    const statistic = await ShopStatistic.findOne({
        where : {shopId: id}
    })
    const total = list.length;
    const rating = list.reduce((s,r)=>s+r.rating, 0)/total;
    statistic.set({
        rating: rating,
        review: total
    })
    await statistic.save();
    return 'ok';
}

module.exports ={
    getStatistic,
    increaseService,
    decreaseService,
    increaseAppointment,
    increaseRescue,
    updateRating,
}
