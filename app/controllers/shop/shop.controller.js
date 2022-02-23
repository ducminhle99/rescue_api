const shopService = require("../../services/shop.service");
const shopStatisticService = require("../../services/shopStatistic.service");
const appointmentService = require("../../services/appointment.service");

exports.getAllShop = (req,res,next) =>{
    shopService.getAllShop().then(list =>{
        res.status(200).json(list);
    }).catch(next);
}

exports.getShopById = (req,res,next) =>{
    shopService.getById(req.params.id).then(shop =>{
        res.status(200).json(shop);
    }).catch(next);
}
exports.createShop = (req,res,next) =>{
    shopService.createShop(req).then(shop =>{
        res.status(200).json(shop)
    }).catch(next);
}
exports.searchShop = (req,res,next) =>{
    shopService.searchShop(req.query).then(list =>{
        res.status(200).json(list)
    }).catch(next);
}
exports.getCurrenShop = (req,res,next) =>{
    shopService.getCurrentShop(req).then(shop =>{
        res.status(200).json(shop)
    }).catch(next);
}
exports.changeAbout = (req,res,next) =>{
    shopService.changeAbout(req).then(shop =>{
        res.status(200).json(shop)
    }).catch(next);
}
exports.fetchAppointment = (req, res, next) => {
    appointmentService.getByShopId(req.params.id).then((data)=> {
        res.status(200).json(data);
    }).catch(next)
}
exports.confirmAppointment = (req, res, next) => {
    appointmentService.confirmAppointment(req.params.id).then((data) => {
        res.status(200).json(data);
    }).catch(next)
}
exports.deleteAppointment = (req, res, next) => {
    appointmentService.deleteAppointment(req.params.id).then((data) => {
        res.status(200).json(data);
    }).catch(next)
}
exports.getStatistic = (req,res,next) =>{
    shopStatisticService.getStatistic(req.params.id).then((data) =>{
        res.status(200).json(data)
    }).catch(next)
}
