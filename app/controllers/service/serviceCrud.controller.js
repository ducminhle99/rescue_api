const Service = require("../../services/service.service");

exports.getAll = (req,res,next)=>{
    Service.getAll(req.params).then(list => {
        res.status(200).json(list)
    }).catch(next);
}
exports.createService = (req,res,next) =>{
    Service.createService(req).then(service=>{
        res.status(200).json(service);
    }).catch(next)
}
exports.deleteService = (req,res,next) =>{
    Service.deleteService(req).then(service=>{
        res.status(200).json(service);
    }).catch(next)
}