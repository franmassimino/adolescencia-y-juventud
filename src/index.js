const express = require('express')
const app = express()
const path = require('path')
const port = 3030

//static files
const publicPath = path.resolve(__dirname, '../public')
app.use(express.static(publicPath))


//server
app.listen(port, () => console.log(`Server live on http://localhost:${port}`))


//routes
app.use(require('./routes/web'))
