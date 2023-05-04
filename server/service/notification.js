const notificationRepository = require('../repository/notification')

class NotificationService {
    async createNotification(user_id, email) {
        return await notificationRepository.createNotification(user_id, email)
    }
}

module.exports = new NotificationService()
