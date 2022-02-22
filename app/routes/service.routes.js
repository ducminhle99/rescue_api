const authJwt = require("../middleware/authJwt");

const app = require('express');
const router = app.Router();
const schema = require('../helpers/validateSchema')
const controller = require("../controllers/service/serviceCrud.controller");

router.post('/',authJwt.verifyToken,controller.createService);
router.delete('/:id',authJwt.verifyToken,controller.deleteService);
router.get('/:id',controller.getAll);

module.exports = router;