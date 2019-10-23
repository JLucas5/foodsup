const express =  require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionController = require('./Controllers/SessionController')
const FoodController = require('./Controllers/FoodController')
const MenuController = require('./Controllers/MenuController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store)

routes.post('/foods', upload.single('thumbnail'), FoodController.store)

routes.get('/menu/:url', MenuController.show)

module.exports = routes