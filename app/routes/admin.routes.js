const authJwt = require("../middleware/authJwt");

const app = require('express');
const router = app.Router();
const schema = require('../helpers/validateSchema')
const listController = require("../controllers/admin/userList.controller");
const userCrudController = require("../controllers/admin/userCrud.controller")
const categoryController = require("../controllers/admin/category.controller")

//routes user info
router.get("/users",[authJwt.verifyToken,authJwt.isAdmin],listController.getAllUser);
router.put("/users",[authJwt.verifyToken,authJwt.isAdmin],userCrudController.updateUserRole);


module.exports = router;
