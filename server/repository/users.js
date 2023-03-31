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
            const users = this.db.users.findAll({
                order: [['id', 'ASC']],
            })
            return users
        } catch (error) {
            console.log('Error in getting users', error)
            return []
        }
    }

    // UPDATE
    // async updateUser() {}

    // DELETE
    // async deleteUser() {}
}

module.exports = new UserRepository()