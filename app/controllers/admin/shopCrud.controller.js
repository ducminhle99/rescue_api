const shopService = require("../../services/shop.service");

exports.getAll = (req,res,next) =>{
    shopService.getAllShop(req).then(shops => {
        res.status(200).json(shops)
    }).catch(next)
}
exports.getById = (req,res,next) =>{
    shopService.getById(req.params.id).then(shop => {
        res.status(200).json(shop)
    }).catch(next)
}
