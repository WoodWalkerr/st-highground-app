const users = require('../model/users');
const userRepository = require('../repository/users')

class UserService {
    async getAllUsers(user) {
        return await userRepository.getAllUsers(user)
    }
    async getUserById(id) {
        return await userRepository.getUserById(id)
    }

    async getUserByEmail(user) {
        return await userRepository.authenticateUser(user);
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

    async updateUser(id) {
        return await userRepository.updateUser(id)
    }

    async userlogin(users) {
        return await userRepository.userlogin(users)
    }
}

module.exports = new UserService()