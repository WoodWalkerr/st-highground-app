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

    async getUserByEmail(email, password) {
        try {
            
        } catch (error) {
            
        }
    }

//     if (!user) {
//         return res.status(404).send('No user found.')
//     }

//     const passwordIsValid = bcrypt.compareSync(
//         req.body.password,
//         user.password
//     )
//     if (!passwordIsValid) {
//         return res.status(401).send({ auth: false, token: null })
//     }

//     const token = jwt.sign({ id: user.id }, jwtSecret, {
//         expiresIn: '24h',
//     })
//     res.status(200).send({ auth: true, token: token })
// })
// .catch((err) => {
//     console.log('Error:', err)
//     return res.status(500).send('Error on the server.')
// })
    async createUser(users) {
        let userData = {}

        try {
            const password = users.password
            const salt = bcrypt.genSaltSync(10)
            const hashedPassword = bcrypt.hashSync(password, salt)

            userData = { ...users, password: hashedPassword }
            const createdUser = await this.db.users.create(userData)
            return createdUser
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async updateUser(users) {
        let data = {}

        try {
            data = await this.db.users.update(
                { ...users },
                {
                    where: {
                        id: users.id,
                    },
                }
            )
        } catch (error) {
            console.log('Error: ', error)
        }
        return data
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

