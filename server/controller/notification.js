const notificationService = require('../service/notification')

class NotificationController {
    async createNotification(user_id, email) {
        return await notificationService.createNotification(user_id, email)
    }
}

module.exports = new NotificationController()
