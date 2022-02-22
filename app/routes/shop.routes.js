const authJwt = require("../middleware/authJwt");

const app = require('express');
const router = app.Router();
const schema = require('../helpers/validateSchema')
const controller = require("../controllers/shop/shop.controller");
const {verify} = require("jsonwebtoken");
const notiController = require('../controllers/shop/NotiCrud.controller')

//shop
router.get('/search',controller.searchShop)
router.post('/',[authJwt.verifyToken],controller.createShop)
router.post('/about',[authJwt.verifyToken],controller.changeAbout)
router.get('/current',[authJwt.verifyToken],controller.getCurrenShop)
router.get('/appointments/:id',controller.fetchAppointment)
router.put('/appointments/:id',[authJwt.verifyToken],controller.finishAppointment)
router.delete('/appointments/:id',[authJwt.verifyToken],controller.deleteAppointment)
router.get("/notifications/:id",[authJwt.verifyToken],notiController.getAll)
router.get('/',controller.getAllShop)
router.get('/:id',controller.getShopById)

module.exports = router;