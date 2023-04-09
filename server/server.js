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

app.get('/api/v1/users/:id', (req, res) => {
    usersController.getUserById(req.params.id).then((data) => res.json(data))
})

app.get('/api/v1/users', (req, res) => {
    usersController.getUsers().then((data) => res.json(data))
})

app.post('/api/v1/users', (req, res) => {
    usersController.createUser(req.body.user).then((data) => res.json(data))
})

app.put('/api/v1/users/:id', (req, res) => {
    const { id } = req.params
    const user = req.body

    usersController
        .updateUser({ ...user, id })
        .then((data) => res.json(data))
        .catch((error) => {
            console.log('Error:', error)
            res.status(500).send('Server error!')
        })
})

app.delete('/api/v1/users/:id', (req, res) => {
    usersController.deleteUser(req.params.id).then((data) => res.json(data))
})

app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`)
})
