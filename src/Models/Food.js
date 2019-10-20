const mongoose = require('mongoose')

const FoodSchema = new mongoose.Schema({
    thumbnail: String,
    thumbnail_location: String,
    food: String,
    price: Number,
    description: String,
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant"
    }

    },  {
         toJSON: {
         virtuals: true, 
        }
})

module.exports = mongoose.model('Food', FoodSchema)