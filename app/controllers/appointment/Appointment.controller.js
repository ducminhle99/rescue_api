const appointmentService = require('../../services/appointment.service');

exports.Create = (req, res, next) => {
    appointmentService.createAppointment(req).then((data)=> {
        res.status(200).json(data);
    }).catch(next)
}
exports.getById = (req, res, next) => {
    appointmentService.getById(req.params.id).then((data)=> {
        res.status(200).json(data);
    }).catch(next)
}
exports.fetchByUser = (req, res, next) => {
    appointmentService.getByUserId(req).then((data)=> {
        res.status(200).json(data);
    }).catch(next)
}