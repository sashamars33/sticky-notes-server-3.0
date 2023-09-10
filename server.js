const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 3333
var cors = require('cors')
const app = express()

//Database Connection
connectDB()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/pages', require('./routes/pageRoutes'))


//Set build as Static Folder

app.use(express.static(path.join(__dirname, '../frontend/build')))

app.get('*', (req,res) => res.sendFile(path.join('../frontend/build','index.html')))
//Error Handler
app.use(errorHandler)

app.listen(PORT, () => {
    console.log("Server is running.", PORT)
})