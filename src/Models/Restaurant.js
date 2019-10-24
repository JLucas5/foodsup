const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
   name: {
      type: String,
      require : [true, 'Name required']
   },
   url: {
      type: String,
      unique: true,
      require: [true, 'Url required']
   },
   email:{
      type: String,
      required: [true, 'Email required'],
      unique: true
   } ,
   cellphone: {
      type: String,
      require: [true, 'Cellphone required']
   },
   password: {
      type: String,
      required: [true, 'Password required'],
      select: false
   }
})

module.exports = mongoose.model('Restaurant', RestaurantSchema)