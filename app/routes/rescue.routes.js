const authJwt = require("../middleware/authJwt");

const app = require('express');
const router = app.Router();
const schema = require('../helpers/validateSchema')
const controller = require("../controllers/rescue/rescue.controller");

router.post('/list',authJwt.verifyToken,controller.createListRescue);

router.post('/',authJwt.verifyToken,controller.createRescue);
router.get('/:id',controller.getById);
router.put('/:id',authJwt.verifyToken,controller.acceptRescue);
router.delete('/:id',authJwt.verifyToken,controller.deleteRescue);
router.get('/repairShop/:id',controller.getAllbyShop);
router.get('/',controller.getAll);

module.exports = router;