const express = require('express')
const app = express.Router()
const path = require('path')

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/index.html'))
})

app.get('/posts.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/posts.html'))
})

app.get('/acerca-de.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/acerca-de.html'))
})

app.get('/contacto.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/contacto.html'))
})

module.exports = app