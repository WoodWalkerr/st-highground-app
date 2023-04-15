const { deleteUser } = require('../repository/users')
const userService = require('../service/users')

class UserController {
    async getAllUsers(user) {
        return await userService.getAllUsers(user)
    }

    async getUserByEmail(user) {
        return await userService.authenticateUser(user);
    }

    async getUserById(user) {
        return await userService.getUserById(user)
    }

    async createUser(user) {
        return await userService.createUser(user)
    }

    async deleteUser(user) {
        return await userService.deleteUser(user)
    }
    
    async updateUser(user) {
        return await userService.updateUser(user)
    }
}

module.exports = new UserController()
