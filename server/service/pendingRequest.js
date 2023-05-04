const pendingRequestRepository = require('../repository/pendingRequest')

class PendingRequestServices {
    async createNotification(user_id, email) {
        return await pendingRequestRepository.createNotification(user_id, email)
    }
}

module.exports = new PendingRequestServices()
