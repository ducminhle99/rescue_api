const authJwt = require("../middleware/authJwt");

const app = require('express');
const router = app.Router();
const schema = require('../helpers/validateSchema')
const listController = require("../controllers/admin/userList.controller");
const userCrudController = require("../controllers/admin/userCrud.controller")
const shopController = require("../controllers/admin/shopCrud.controller")
const categoryController = require("../controllers/admin/category.controller");

//routes user info
router.get("/users",[authJwt.verifyToken,authJwt.isAdmin],listController.getAllUser);
// test react-admin
// router.get("/users",listController.getAllUser);
router.get("/users/:id",[authJwt.verifyToken,authJwt.isAdmin],userCrudController.getById);
router.delete("/users/:id",[authJwt.verifyToken,authJwt.isAdmin],userCrudController.deleteById);
router.get("/repairShop/:id",shopController.getById);
router.get("/repairShop",[authJwt.verifyToken,authJwt.isAdmin],shopController.getAll);
router.put("/users",[authJwt.verifyToken,authJwt.isAdmin],userCrudController.updateUserRole);

//category
router.get("/categories/:id",categoryController.getOne);
router.post("/categories",[authJwt.verifyToken,authJwt.isAdmin],categoryController.createCategory);
router.put("/categories/:id",[authJwt.verifyToken,authJwt.isAdmin],categoryController.updateCategory);
router.delete("/categories/:id",[authJwt.verifyToken,authJwt.isAdmin],categoryController.deleteCategory);
router.get("/categories",categoryController.getAll);

module.exports = router;
