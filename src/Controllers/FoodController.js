const Food = require('../Models/Fodd')
const Restaurant = require('../Models/Restaurant')

module.exports = {
    async store(req, res){
        
        const { originalname, location } = req.file
        const { food, description, price } = req.body
        const { restaurant_id } = req.headers

        const user = await Restaurant.findById(restaurant_id)

        if (!user) {
            return res.status(400).json({ error: "Restaurant does not exist" })
        }

        const food = await Food.create({
            restaurant: restaurant_id,
            thumbnail: originalname,
            thumbnail_location: location,
            food,
            description: description.trim(),
            price
        })
        
        return res.json(food)
    }
}