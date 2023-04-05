const { connect } = require('../config/db')
const users = require('../model/users')

class UserRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    //GET ALL USER
    async getUsers() {
        try {
            console.log('Getting Users...')
            const users = await this.db.users.findAll({
                order: [['id', 'ASC']],
            })
            return users
        } catch (err) {
            console.log('Error in getting users', err)
            return []
        }
    }

    //GET USER BY ID
    async getUserById(id) {
        try {
          const user = await this.db.users.findByPk(id);
          if (!user) {
            console.log('User not found');
          } else {
            console.log('User found');
          }
          return user;
        } catch (err) {
          console.error('Error in getting user', err);
          return null;
        }
      }
      
    // CREATE
    async createUser(user) {
        try {
            const createdUser = await this.db.users.create(user)
            console.log('User created successfully')
            return createdUser
        } catch (error) {
            console.error(error.message)
            throw error
        }
    }
    // UPDATE 
    async updateUser(id, data) {
        try {
            const user = await this.db.users.findByPk(id);
            if (user) {
                await user.update(data);
                console.log("Updated User");
                return user;
            } else {
                throw new Error('User not found');
            }
        } catch (err) {
            console.error(err.message);
            throw err;
        }
    }

    // DELETE
    async deleteUser(id) {
        try {
            const user = await this.db.users.findByPk(id)
            if (user) {
                await user.destroy()
                console.log('User deleted successfully')
            } else {
                console.log('User not found')
            }
        } catch (err) {
            console.error(err.message)
            throw err
        }
    }
}

module.exports = new UserRepository()
