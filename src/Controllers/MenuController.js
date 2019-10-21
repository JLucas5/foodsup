const Food = require('../Models/Food')

module.exports = {
    async show(req, res){
        const restaurantName = req.params.name

        const food = await Food.find({ restaurantName: restaurantName})

        return res.json(food)
    }
}