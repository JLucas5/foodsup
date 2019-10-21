const Food = require('../Models/Food')
const Restaurant = require('../Models/Restaurant')

module.exports = {
    async store(req, res){
        
        const { originalname, location } = req.file
        const { food, description, price } = req.body
        const { restaurant_id } = req.headers

        const restaurant = await Restaurant.findById(restaurant_id)

        if (!restaurant) {
            return res.status(400).json({ error: "Restaurant does not exist" })
        }

        const food_item = await Food.create({
            restaurant: restaurant_id,
            thumbnail: originalname,
            thumbnail_location: location,
            food,
            description: description.trim(),
            price
        })
        
        return res.json(food_item)
    }
}