const authJwt = require("../middleware/authJwt");

const app = require('express');
const router = app.Router();
const schema = require('../helpers/validateSchema')
const listController = require("../controllers/admin/userList.controller");
const userCrudController = require("../controllers/admin/userCrud.controller")
const shopController = require("../controllers/admin/shopCrud.controller")

//routes user info
router.get("/users",[authJwt.verifyToken,authJwt.isAdmin],listController.getAllUser);
// test react-admin
// router.get("/users",listController.getAllUser);
router.get("/users/:id",[authJwt.verifyToken,authJwt.isAdmin],userCrudController.getById);
router.delete("/users/:id",[authJwt.verifyToken,authJwt.isAdmin],userCrudController.deleteById);
router.get("/repairShop/:id",shopController.getById);
router.get("/repairShop",[authJwt.verifyToken,authJwt.isAdmin],shopController.getAll);
router.put("/users",[authJwt.verifyToken,authJwt.isAdmin],userCrudController.updateUserRole);


module.exports = router;
