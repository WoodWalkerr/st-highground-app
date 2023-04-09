const userRepository = require('../repository/users')

class UserService {
    async getAllUsers(user) {
        return await userRepository.getAllUsers(user)
    }
    async getUserById(id) {
        return await userRepository.getUserById(id)
    }
    async createUser(user) {
        return await userRepository.createUser(user)
    }
    // async authenticateUser(email, password) {
    //     return await userRepository.authenticateUser(email, password);
    // }
    async deleteUser(user) {
        return await userRepository.deleteUser(user)
    }
    async updateUser(id) {
        return await userRepository.updateUser(id)
    }
}

module.exports = new UserService()