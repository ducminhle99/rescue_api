const authJwt = require("../middleware/authJwt");
const fileController = require('../controllers/file/file.controller')
const app = require('express');
const router = app.Router();

//routes
router.post("/upload",authJwt.verifyToken,fileController.uploadFile);
// test delete file
router.delete("/delete/:path",authJwt.verifyToken,fileController.deleteFile);

module.exports = router;