const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
   name: String,
   email: String
})

module.exports = mongoose.model('Restaurant', RestaurantSchema)