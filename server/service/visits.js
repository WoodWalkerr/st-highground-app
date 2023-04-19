const userRepository = require('../repository/users')

class UserService {
    async createVisit(visits) {
        return await userRepository.createVisit(visits)
    }
}

module.exports = new UserService()
