const db = require('../models/db');
const notificationService = require('./notification.service')
const Appointment = db.Appointment;
const User = db.User;
const Shop = db.RepairShop;
const createAppointment = async (req)=>{
    const userId = req.userId;
    const appointment = await Appointment.build({
        description: req.body.description,
        time: req.body.time,
        shopId: req.body.shopId,
        userId: userId,
        finish: false
    })
    await appointment.save();
    await notificationService.createUtoS('Khách đặt lịch',appointment);
    return appointment;

}
const getById = async (id)=>{
    const appointment = await Appointment.findByPk(id,{
        include: {model: User,attributes:['id','fullName','phone','email','imageUrl']}
    })
    return appointment;
}
const getByShopId = async (id) => {
    const appointment = await Appointment.findAll({
        where: {shopId: id },
        include: {model: User,attributes:['id','fullName','phone','email','imageUrl']},
        order:  [['updatedAt', 'DESC']]
    },)
    return appointment;
}
const getByUserId = async (req) => {
    const userId = req.userId;
    const appointment = await Appointment.findAll({
        where: {userId: userId},
        include: {model: Shop,attributes:['id','name','phone','email','imageUrl']},
        order:  [['updatedAt', 'DESC']]
    },)
    return appointment;
}
const finishAppointment = async (id) => {
    const appointment = await Appointment.findByPk(id,{
        include: {model: User,attributes:['id','fullName','phone','email','imageUrl']}
    });
    appointment.finish = true;
    await appointment.save();

    return appointment;
}
const deleteAppointment = async (id) => {
    const appointment = await Appointment.findByPk(id);
    await appointment.destroy();
    return 'ok';
}
module.exports ={
    createAppointment,
    getById,
    getByShopId,
    getByUserId,
    finishAppointment,
    deleteAppointment
}