const app = require('express');
const router = app.Router();
const test = require('../controllers/test/import.controller')
const testShop = require('../controllers/test/testShop.controller')
const testImg = require('../controllers/test/testImg.controller')
const noti = require('../controllers/test/notiTest.controller')

//routes
router.get("/",test.importData);
router.post("/",testShop.importData);
router.post('/img',testImg.testImg)
router.get('/noti',noti.notification)


module.exports = router;