const { connect } = require('../config/db')

class UserRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    // CREATE
    // async createUser() {}

    async getUsers() {
        try {
            console.log('Getting Users...')
            const users = await this.db.users.findAll({
                order: [['id', 'ASC']],
            })
            return users
        } catch (error) {
            console.log('Error in getting users', error)
            return []
        }
    }
        // CREATE
        async createUser(user) {
            try {
                return await this.db.users.create(user)
            } catch (error) {
                console.log('Error', error)
            }
        }

    // UPDATE
    // async updateUser() {}

    // DELETE
    // async deleteUser() {}
}

module.exports = new UserRepository()