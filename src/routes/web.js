const express = require('express')
const app = express.Router()
const path = require('path')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/posts', (req, res) => {
    res.render('posts')
})

app.get('/about', (req, res) => {
    res.render('acerca-de')
})

app.get('/contacto', (req, res) => {
    res.render('contacto')
})

app.get('/posts/header', (req, res) => {
    res.render('./partials/header')
})

module.exports = app