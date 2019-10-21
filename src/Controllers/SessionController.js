const Restaurant = require('../Models/Restaurant')

module.exports = {
    async store(req, res){ 
        const { name } = req.body

        let restaurant = await Restaurant.findOne({ name })

        if (!restaurant){
            restaurant = await Restaurant.create({ name })
        }
    
        return res.json(restaurant)
    }
}