const bcrypt = require('bcryptjs')
const { connect } = require('../config/db')
const { generateAccessToken } = require('../config/jwt')

class UserRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    async getAllUsers() {
        try {
            const users = await this.db.users.findAll({
                order: [['id', 'ASC']],
                // include: {
                //     model: this.db.visits,
                //     attributes: ['id', 'date', 'time', 'purpose'], // specify the columns you want to include
                // },
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
            } else {
            }
            return user
        } catch (error) {
            console.log('Error: ', error)
        }
    }

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

    //Login

    async userlogin(users) {
        try {
            const password = users.password
            const user = await this.db.users.findOne({
                where: {
                    email: users.email,
                },
            })
            const matchPassword = await bcrypt.compare(password, user.password)
            if (matchPassword) {
                const jwt = generateAccessToken({ email: users.email })
                if (jwt) {
                    const getUser = [user, { jwt: jwt }]
                    return getUser
                }
            }
            throw 'The user does not exist'
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    // async userlogin(users) {
    //     console.log('Login Credentials', users.email)
    
    //     try {
    //         const password = users.password
    //         console.log('Password', password)
    
    //         const user = await this.db.users.findOne({
    //             where: {
    //                 email: users.email,
    //             },
    //         })
    
    //         if (!user) {
    //             throw new Error('The user does not exist')
    //         } else {
    //             try {
    //                 const passwordMatch = await bcrypt.compare(
    //                     password,
    //                     user.password
    //                 )
    
    //                 if (passwordMatch) {
    //                     const generatedToken = generateAccessToken({
    //                         email: users.email,
    //                     })
    //                     if (generatedToken) {
    //                         const verifiedUserData =
    //                             await this.db.users.findOne({
    //                                 where: { id: user.id },
    //                             })
    
    //                         const generatedTokenObject = {
    //                             jwt: generatedToken,
    //                             userRole: verifiedUserData.role_id,
    //                         }
    //                         const updatedData = [
    //                             generatedTokenObject,
    //                             verifiedUserData,
    //                         ]
    
    //                         return updatedData
    //                     }
    //                 } else {
    //                     throw new Error('The user password is incorrect')
    //                 }
    //             } catch (error) {
    //                 console.log('Error: ', error)
    //             }
    //         }
    //     } catch (error) {
    //         console.log('Error: ', error)
    //     }
    // }
    

    async getUserByEmail(email) {
        try {
            const user = await this.db.users.findOne({
                where: {
                    email: email.email,
                },
            })
            return user
        } catch (error) {
            console.log('Error: ', error)
        }
    }
}

module.exports = new UserRepository()
