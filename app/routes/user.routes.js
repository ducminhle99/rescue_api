const authJwt = require("../middleware/authJwt");

const app = require('express');
const router = app.Router();
const schema = require('../helpers/validateSchema')
const controller = require("../controllers/user/UserCrud.controller");
const appointmentController = require('../controllers/appointment/Appointment.controller')
const notiController = require('../controllers/user/NotiCrud.controller')
//routes user info
router.get("/",controller.getAllUser)
router.get("/current",[authJwt.verifyToken],controller.getCurrentUser)
router.put('/',[schema.updateUser,authJwt.verifyToken],controller.updateUser)
router.post('/avatar',[authJwt.verifyToken],controller.updateAvatar)
router.post("/upgrade",[authJwt.verifyToken,authJwt.isUser],controller.upgradeUser)
// user roles
router.post("/appointments",[authJwt.verifyToken],appointmentController.Create)
router.get("/appointments",[authJwt.verifyToken],appointmentController.fetchByUser)
router.get("/notifications",[authJwt.verifyToken],notiController.getAll)

router.get("/:id",controller.getUserDetail)







module.exports = router;

