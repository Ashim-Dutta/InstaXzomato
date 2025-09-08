const express = require('express');
const authController =  require('../controllers/auth.controller.js');

const router = express.Router();


//user auth APIs
router.post('/user/register',authController.registerController);
router.post("/user/login", authController.loginController);
router.get("/user/logout", authController.logoutController);

//food partner auth APIs
router.post('/food-partner/register',authController.registerFoodPartnerController);
router.post("/food-partner/login", authController.loginFoodPartnerController);
router.get("/food-partner/logout", authController.logoutFoodPartnerController);

module.exports = router;