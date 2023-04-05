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

// CREATE
app.post('/api/v1/users', (req,res) => {
    const data = req.body
    usersController.createUser(data).then((data) => res.send("Successful"))
})

// GET USER BY ID

app.get('/api/v1/users/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const user = await usersController.getUserById(id);
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.send(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  
  // GET ALL USERS
  app.get('/api/v1/users', async (req, res) => {
    try {
      const users = await usersController.getUsers();
      res.send(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  
  // UPDATE USER BY ID
  app.put('/api/v1/users/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const user = await usersController.updateUser(id, data);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.send('User updated successfully');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

  // DELETE USER BY ID
  app.delete('/api/v1/users/:id', async (req, res) => {
    const id = req.params.id;
    try {
      await usersController.deleteUser(id);
      res.send('User deleted successfully');
    } catch (err) {
        console.error(err.message);
      res.status(500).send("Server Error");
    }
  });

// PORT 
app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`)
})



