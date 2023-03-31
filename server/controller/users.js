const userService = require('../service/users')

class UserController {
    async getUsers() {
        return await userService.getUsers()
    }

    // async createUser(user) {
    //     return await userService.createUser(user)
    // }

    // async updateUser(user) {
    //     return await userService.updateUser(user)
    // }

    // async deleteUser(userId) {
    //     return await userService.deleteUser(userId)
    // }
}

module.exports = new UserController()