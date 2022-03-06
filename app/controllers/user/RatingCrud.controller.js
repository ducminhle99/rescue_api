const ratingService = require('../../services/rating.service');


exports.getShopRating = (req,res,next) => {
    ratingService.getShopRating(req.params.id).then(data =>{
        res.status(200).json(data);
    }).catch(next);
}
exports.createRating = (req,res,next) => {
    ratingService.createRating(req).then(data =>{
        res.status(200).json(data);
    }).catch(next);
}
