const bcrypt = require('bcryptjs')
const { connect } = require('../config/db')
const users = require('../model/users')

class UserRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    async getUsers() {
        try {
            console.log('Fetching Users')
            const users = await this.db.users.findAll({
                order: [['id', 'ASC']],
            })
            return users
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async getUserById(id) {
        try {
            const user = await this.db.users.findByPk(id)
            if (!user) {
                console.log('User not found')
            } else {
                console.log('User found')
            }
            return user
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async createUser(user) {
        let userData = {}

        try {
            const password = user.password
            const salt = bcrypt.genSaltSync(10)
            const hashedPassword = bcrypt.hashSync(password, salt)

            userData = { ...user, password: hashedPassword }
            const createdUser = await this.db.users.create(userData)
            return createdUser
        } catch (error) {
            console.log('Error: ', error)
        }
    }


    async updateUser(user) {
        try {
          const data = await this.db.users.update(
            { ...user },
            {
              where: {
                id: user.id
              },
            }
          );
          return data;
        } catch (error) {
          console.log('Error:', error);
        }
      }

    async deleteUser(id) {
        try {
            const user = await this.db.users.destroy({ where: { id } })
            return user
        } catch (error) {
            console.log('Error: ', error)
        }
    }
}

module.exports = new UserRepository()
