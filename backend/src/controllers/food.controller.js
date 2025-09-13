const foodModel = require('../models/food.model');
const storageService = require('../services/storage.service');
const { v4: uuid } = require('uuid');
const likeModel = require('../models/likes.model');

async function createFood(req, res) { 

    const fileUploadResult = await storageService.uploadfile(req.file.buffer, uuid())
        const foodItem = await foodModel.create({
            name: req.body.name,
            video: fileUploadResult.url,
            description: req.body.description,
            foodPartner:req.foodPartner._id
        })
    
    res.status(201).json({
        message: "Food item created successfully",
       food: foodItem
    })
    }

async function getFoodItems(req, res) { 

    const foodItems = await foodModel.find({})

    res.status(200).json({
        message: "Food items fetched successfully",
       food: foodItems
    })

}

async function likeFoodItem(req, res) { 
    const { foodId } = req.body;
    const user = req.user;

    const isAlreadyLiked = await likeModel.findOne({ food: foodId, user: user._id });
    
    if (isAlreadyLiked) { 
        await likeModel.deleteOne({
            user: user._id,
            food: foodId
        })

        await foodModel.findByIdAndUpdate(foodId, { $inc: { likeCount: -1 } });

        return res.status(200).json({
            message: "Food item unliked successfully"
        })
    }


    const like = await likeModel.create({
        user: user._id,
        food: foodId
    })

        await foodModel.findByIdAndUpdate(foodId, { $inc: { likeCount: 1 } });



    res.status(201).json({
        message: "Food item liked successfully",
        like: like
    });
}

module.exports = {
    createFood,getFoodItems,likeFoodItem
};