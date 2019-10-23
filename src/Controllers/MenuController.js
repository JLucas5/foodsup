const Food = require('../Models/Food')
const Restaurant = require('../Models/Restaurant')

module.exports = {
    async show(req, res){


        const { url } = req.params

        const { id } = await Restaurant.findOne({ url })

        const foods = await Food.find({ restaurant : id })

        return res.json(foods)
    }
}