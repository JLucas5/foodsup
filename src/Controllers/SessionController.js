const Restaurant = require('../Models/Restaurant')

module.exports = {
    async store(req, res){ 
        const { email } = req.body

        let restaurant = await Restaurant.findOne({ email })

        if (!restaurant){
            restaurant = await Restaurant.create({ email })
        }
    
        return res.json(restaurant)
    }
}