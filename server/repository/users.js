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
        } catch (err) {
            console.log('Error in getting users', err)
            return []
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
        } catch (err) {
            console.log('Error in getting user', err)
        }
    }

    async createUser(user) {
        try {
            const createdUser = await this.db.users.create(user)
            console.log('User created successfully')
            return createdUser
        } catch (error) {
            console.log(error)
            return []
        }
    }

    async updateUser(user) {
        console.log("Updating User");
        let data = {};

        try {
          data = await this.db.users.update(
            {...user},
            {
              where: {
                id: user.id,
              },
            }
          );
        } catch (error) {
          console.log("Error:", error);
        }
        return data;
      }

    // async updateUser(user) {
    //     let data = {};
    //     try {
    //         data = await this.db.users.update(user),
    //         // console.log("Updated User") 
    //         {
    //             where{
    //                 id: user.id
    //             }
    //     } catch (error) {
    //         console.log(error)
    //     }
    //      return data;

    // }

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
            console.log(err.message)
            throw err
        }
    }
}

module.exports = new UserRepository()
