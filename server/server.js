require('dotenv').config()

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
// const jwt = require('jsonwebtoken')
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

// app.post('/api/v1/login', async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await usersController.authenticateUser(email, password);
//         if (!user) {
//             return res.status(401).json({ error: 'Invalid email or password' });
//         }

//         const accessToken = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' });
//         const refreshToken = jwt.sign({ username: user.username }, process.env.REFRESH_TOKEN_SECRET);
//         res.json({ accessToken: accessToken, refreshToken: refreshToken });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });


app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`)
})
