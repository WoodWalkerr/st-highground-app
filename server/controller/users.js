const { deleteUser } = require('../repository/users')
const userService = require('../service/users')

class UserController {
    async getUsers(user) {
        return await userService.getUsers(user)
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
    
    async updateUser(id) {
        return await userService.updateUser(id)
    }
}

module.exports = new UserController()
