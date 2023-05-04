const pendingRequestServices = require('../service/pendingRequest')

class PendingRequestController {
    async createNotification(user_id, email) {
        return await pendingRequestServices.createNotification(user_id, email)
    }
}

module.exports = new PendingRequestController()
