const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

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

RestaurantSchema.pre('save', async function(next){
   const hash = await bcrypt.hash(this.password, 10)
   this.password = hash
   
   next()
})

module.exports = mongoose.model('Restaurant', RestaurantSchema)