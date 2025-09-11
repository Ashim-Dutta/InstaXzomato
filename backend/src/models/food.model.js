const mongoose = require('mongoose');


const foodSchema = new mongoose.Schema({
    name: { type: String},
    video: {type: String },
    description: { type: String },
    foodPartner: {type: mongoose.Schema.Types.ObjectId, ref: 'foodpartner' },
})


const foodModel = mongoose.model('food', foodSchema);
module.exports = foodModel;