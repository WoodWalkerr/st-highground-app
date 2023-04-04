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

// GET BY ID
app.get('/api/v1/users/:id', (req, res) => {
    const id = req.params.id
    const data = req.body
    usersController.getUsersById(id, data).then((data) => res.json(data))
})
// GET ALL USER
app.get('/api/v1/users', (req, res) => {
    const data = req.body
    usersController.getUsers(data).then((data) => res.json(data))
})

// CREATE
app.post('/api/v1/users', (req,res) => {
    const data = req.body
    usersController.createUser(data).then((data) => res.send("Successful"))
})

// UPDATE 
app.put('/api/v1/users/:id', (req,res) => {
    const id = req.params.id
    usersController.updateUser(id).then((data) => res.send("Edited Successfully"))
})

// DELETE
app.delete('/api/v1/users/:id', (req,res) => {
    const id = req.params.id
    usersController.deleteUser(id).then((data) => res.send("Deleted"))
})

// PORT 
app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`)
})



// create
// app.post('/api/v1/users', async (req, res) => {
//     const data = req.body;
//     try {
//       const createdUser = await usersController.createUser(data);
//       res.send(createdUser);
//     } catch (err) {
//         console.error(err.message);
//       res.status(500).send("Server Error");
//     }
//   });
  
//   app.delete('/api/v1/users/:id', async (req, res) => {
//     const id = req.params.id;
//     try {
//       await usersController.deleteUser(id);
//       res.send('User deleted successfully');
//     } catch (err) {
//         console.error(err.message);
//       res.status(500).send("Server Error");
//     }
//   });