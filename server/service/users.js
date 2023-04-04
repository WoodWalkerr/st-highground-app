const userRepository = require('../repository/users')

class UserService {
    async getUsers() {
        return await userRepository.getUsers()
    }
    async createUser(user) {
        return await userRepository.createUser(user)
    }

    // CREATE
    // async createUser() {}

    // UPDATE
    // async updateUser() {}

    // DELETE
    // async deleteUser()
}

module.exports = new UserService()