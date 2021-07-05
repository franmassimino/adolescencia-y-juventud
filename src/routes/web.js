const express = require('express')
const app = express.Router()
const path = require('path')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/posts', (req, res) => {
    res.render('posts.ejs')
})

app.get('/about', (req, res) => {
    res.render('acerca-de.ejs')
})

app.get('/contacto', (req, res) => {
    res.render('contacto.ejs')
})

module.exports = app