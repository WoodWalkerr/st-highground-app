require('dotenv').config()

const verifyToken = require('./utils/jwtGenerator')
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const jwt = require('jsonwebtoken')
const path = require('path')

const usersController = require('./controller/users')

const app = express()
const port = process.env.DB_PORT || 8000

app.use(express.static(path.join(__dirname, './ui/build/')))
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.get('/api/v1/users/:id', (req, res) => {
    usersController.getUserById(req.params.id).then((data) => res.json(data))
})

app.get('/api/v1/users', (req, res) => {
    usersController.getAllUsers().then((data) => res.json(data))
})

app.post('/api/v1/users', (req, res) => {
    usersController.createUser(req.body.users).then((data) => res.json(data))

})

app.put('/api/v1/users', (req, res) => {
    usersController.updateUser(req.body.user).then((data) => res.json(data))
})

app.delete('/api/v1/users/:id', (req, res) => {
    usersController.deleteUser(req.params.id).then((data) => res.json(data))
})

// POST endpoint with JWT authentication
app.post('/api/v1/login', (req, res) => {
    usersController
        .getUserByEmail(req.body.email)
        .then((data) => res.json(data))
})

// Login Auth.
app.get('/api/v1/login', verifyToken, (req, res) => {
    usersController.getUserById(req.userId, { password: 0 })
        .then((data) => res.json(data)) // pass the projection object as second argument
})

app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`)
})
