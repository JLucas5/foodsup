const Restaurant = require('../Models/Restaurant')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authConfig = require('../config/auth.json')

function generateToken( params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    })
}

module.exports = {

    async register(req, res){ 

        const { email, name, url, cellphone, password } = req.body
        try{

            if( await Restaurant.findOne({ email }) ){
                return res.status(401).send({error: 'Restaurant already registered - 401'})
            }
           
            const restaurant = await Restaurant.create({ email, name, url, cellphone, password })
            
            restaurant.password = undefined

            return res.send({
                restaurant,
                token: generateToken({ id: restaurant.id })
            })
              
        }catch(err){
            res.status(400).send({error: 'Registration failed - 400'})
        }
       
    },

    async login(req, res){
        const { email, password } = req.body

        const restaurant = await Restaurant.findOne(email).select('+password')

        if(!restaurant)
            return res.status(400).send({ error: 'Restaurant not found ' })

        if(!await bcrypt.compare(password, restaurant.password))
            return res.status(400).send({ error: 'Invalid password' })
        
        restaurant.password = undefined

        res.send({
            restaurant,
            token: generateToken({ id: restaurant.id })
        })
    }
}