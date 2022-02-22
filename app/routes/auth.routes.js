const controller = require("../controllers/auth/Auth.controller");
const app = require('express');
const router = app.Router();
const schema = require('../helpers/validateSchema')

//routes
router.post("/register",schema.registerSchema,controller.register);
router.post("/login",schema.loginSchema,controller.login);
router.get("/confirm/:token",controller.confirmCode);

module.exports = router;

