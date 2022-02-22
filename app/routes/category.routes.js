const app = require('express');
const router = app.Router();
const schema = require('../helpers/validateSchema')
const authJwt = require("../middleware/authJwt");
const categoryController = require("../controllers/admin/category.controller");

//rotes category

router.get("/",categoryController.getAll);
router.post("/",[authJwt.verifyToken,authJwt.isAdmin],categoryController.createCategory);
router.put("/",[authJwt.verifyToken,authJwt.isAdmin],categoryController.updateCategory);
router.delete("/",[authJwt.verifyToken,authJwt.isAdmin],categoryController.deleteCategory);

module.exports = router;
