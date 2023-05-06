const { connect } = require('../config/db')

class visitorLogRepository {
    db = {}
    constructor() {
        this.db = connect()
    }

    async getAllLogs() {
        try {
            const users = await this.db.visitorLog.findAll({
                order: [['id', 'ASC']],
                // include: {
                //     model: this.db.visits,
                //     attributes: ['id', 'date', 'time', 'purpose'], // specify the columns you want to include
                // },
            })
            return users
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async getPendingReq(userId) {
        try {
          const visits = await this.db.visit.findAll({
            where: {
              user_id: userId,
              status: 'pending',
            },
            order: [['visit_date', 'ASC'], ['visit_time', 'ASC']],
            include: [{
              model: this.db.user,
              attributes: ['name'],
            }],
          })
          return visits
        } catch (error) {
          console.log('Error: ', error)
        }
      }
      

    async getLogById(id) {
        try {
            const users = await this.db.visitorLog.findByPk(id)
            if (!users) {
            } else {
            }
            return users
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async deleteLog(id) {
        try {
            const visit = await this.db.visitorLog.findByPk(id)
            if (!visit) {
                throw new Error(`Visit with ID ${id} not found`)
            }
            await visit.destroy()
            return { message: 'Visit deleted successfully' }
        } catch (err) {
            console.error(err)
            throw new Error('Failed to delete visit')
        }
    }
}

module.exports = new visitorLogRepository()
