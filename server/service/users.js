const userRepository = require('../repository/users')

class UserService {
    async getUsers(user) {
        return await userRepository.getUsers(user)
    }
    async getUserById(id) {
        return await userRepository.getUserById(id)
    }
    async createUser(user) {
        return await userRepository.createUser(user)
    }
    async deleteUser(user) {
        return await userRepository.deleteUser(user)
    }
    async updateUser(id) {
        return await userRepository.updateUser(id)
    }
}

module.exports = new UserService()