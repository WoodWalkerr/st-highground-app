const userRepository = require('../repository/users')

class UserService {
    async getUsers(user) {
        return await userRepository.getUsers(user)
    }
    async getUsersById(user) {
        return await userRepository.getUsersById(user)
    }
    async createUser(user) {
        return await userRepository.createUser(user)
    }
    async deleteUser(user) {
        return await userRepository.deleteUser(user)
    }
    async updateUser(user) {
        return await userRepository.updateUser(user)
    }
}

module.exports = new UserService()