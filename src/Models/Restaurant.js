const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
   name: String,
   url: String,
   email: String,
   cellphone: String
})

module.exports = mongoose.model('Restaurant', RestaurantSchema)