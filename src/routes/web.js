const express = require('express')
const app = express.Router()
const mainController = require('../controllers/mainController.js')
const postsController = require('../controllers/postsController.js')


app.get('/', mainController.index)

app.get('/posts', mainController.posts)

app.get('/about', mainController.about)

app.get('/contacto', mainController.contacto)

//posts
app.get('/posts/:id', postsController.post)


module.exports = app