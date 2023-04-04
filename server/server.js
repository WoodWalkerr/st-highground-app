require('dotenv').config()

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const path = require('path')

const usersController = require('./controller/users')

const app = express()
const port = process.env.DB_PORT || 8000

app.use(express.static(path.join(__dirname, './ui/build/')))
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

// create 
app.get('/', (req, res) => {
    res.send('Welcome to Awesome Application!')
})
// get all
app.get('/api/users', (req, res) => {
    usersController.getUsers().then((data) => res.json(data))
})
// create
app.post('/api/v1/users', (req,res) => {
    const data = req.body
    usersController.createUser(data).then((data) => res.send("successful"))
})


app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`)
})