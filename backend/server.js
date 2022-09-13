const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const cors = require('cors')


connectDB()

const app = express()

app.use(cors({
    origin: '*'
}))

app.use(express.json())
app.use(express.urlencoded({ extened: false }))


app.use('/api/vocabs', require('./routes/vocabRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))