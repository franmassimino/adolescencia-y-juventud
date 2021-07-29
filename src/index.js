const express = require('express')
const app = express()
const path = require('path')
const port = 3030
const host = '0.0.0.0';

//static files
const publicPath = path.resolve(__dirname, '../public')
app.use(express.static(publicPath))

//views
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


//server
app.set("port", process.env.PORT || port)
app.listen(port, host,() => console.log("Server live on http://localhost:"+ port))


//routes
app.use(require('./routes/web'))
