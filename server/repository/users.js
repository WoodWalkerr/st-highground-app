const bcrypt = require('bcryptjs')
const { connect } = require('../config/db')
const users = require('../model/users')

class UserRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    async getAllUsers() {
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

    // async authenticateUser(email, password) {
    //     try {
    //       const user = await this.db.users.findOne({ where: { email } })
    //       if (!user) {
    //         return null
    //       }
    //       const passwordMatch = bcrypt.compareSync(password, user.password)
    //       if (!passwordMatch) {
    //         return null
    //       }
    //       return user
    //     } catch (error) {
    //       console.log('Error: ', error)
    //       throw new Error('Failed to authenticate user')
    //     }
    //   }


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
        let data = {};

        try {
            data = await this.db.users.update(
                { ...user },
                {
                    where: {
                        id: user.id,
                    },
                }
            );
        } catch (error) {
            console.log('Error: ', error)
        }
        return data;
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
