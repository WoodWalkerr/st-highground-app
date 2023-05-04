const { connect } = require('../config/db')

class NotificationRepository {
    db = {}
    constructor() {
        this.db = connect()
    }

    async createNotification(user_id, email) {
        try {
          const notification = await this.db.notification.create({ user_id, email });
          return notification;
        } catch (error) {
          console.log('Error: ', error);
          throw error;
        }
      }
      
}

module.exports = new NotificationRepository()
