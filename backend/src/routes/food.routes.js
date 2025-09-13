const express = require('express');
const router = express.Router();
const foodController = require('../controllers/food.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const multer = require('multer');



const upload = multer({storage: multer.memoryStorage()});
router.post('/',
    authMiddleware.authFoodPartnerMiddleware,
    upload.single('video'),
    foodController.createFood);


router.get('/',
    authMiddleware.authUserMiddleware,
    foodController.getFoodItems
)


router.post('/like',
    authMiddleware.authUserMiddleware,
    foodController.likeFoodItem
)


router.post('/save',
    authMiddleware.authUserMiddleware,
    foodController.saveFoodItem
)



module.exports = router;