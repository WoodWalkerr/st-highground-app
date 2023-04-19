// const { deleteUser } = require('../repository/users')
const userService = require('../service/users')

class UserController {
    async createVisit(visit) {
        return await userService.createVisit(visit)
    }
} 

module.exports = new UserController()
