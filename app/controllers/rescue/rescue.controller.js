const rescueService = require("../../services/rescue.service");

exports.createRescue = (req,res,next)=>{
    rescueService.createRescue(req).then(rescue => {
        res.status(200).json(rescue)
    }).catch(next);
}
exports.createListRescue = (req,res,next)=>{
    rescueService.createListRescue(req).then(rescue => {
        res.status(200).json(rescue)
    }).catch(next);
}
exports.getAll = (req,res,next) =>{
    rescueService.getAll().then(list=>{
        res.status(200).json(list);
    }).catch(next)
}
exports.getAllbyShop = (req,res,next) =>{
    rescueService.getAllByShop(req.params.id).then(list=>{
        res.status(200).json(list);
    }).catch(next)
}
exports.getById = (req,res,next) =>{
    rescueService.getById(req.params.id).then(list=>{
        res.status(200).json(list);
    }).catch(next)
}
exports.acceptRescue = (req,res,next) =>{
    rescueService.acceptRescue(req.params.id).then(list=>{
        res.status(200).json(list);
    }).catch(next)
}
exports.deleteRescue = (req,res,next) =>{
    rescueService.deleteRescue(req.params.id).then(list=>{
        res.status(200).json(list);
    }).catch(next)
}