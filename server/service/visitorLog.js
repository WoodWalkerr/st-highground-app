const visitorLogRepository = require('../repository/visitorLog')

class visitorLogServices {
    async createNotification(user_id, email) {
        return await visitorLogRepository.createNotification(user_id, email)
    }
}

module.exports = new visitorLogServices()
