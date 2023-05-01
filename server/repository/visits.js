const { connect } = require('../config/db')
const visits = require('../model/visits')
const moment = require('moment-timezone')
const { Op } = require('sequelize')

class VisitRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    async getAllVisits() {
        try {
            const visit = await this.db.visits.findAll({
                order: [['id', 'ASC']],
                // include: {
                //     model: this.db.users,
                //     attributes: ['id', 'name', 'email', 'phone_number', 'type'],
                // },
            })
            return visit
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async createVisit(visits) {
        try {
            const visitCount = await this.db.visits.count({
                where: {
                    visit_date: {
                        [Op.between]: [
                            new Date(visits.visit_date + 'T00:00:00.000Z'),
                            new Date(visits.visit_date + 'T23:59:59.999Z'),
                        ],
                    },
                },
            })

            const MAX_VISITS_PER_DAY = 2

            if (visitCount >= MAX_VISITS_PER_DAY) {
                return `Sorry, the maximum number of visits (${MAX_VISITS_PER_DAY}) has already been reached for ${visits.visit_date}. Please choose another date.`
            }

            const visit = await this.db.visits.create({
                user_id: visits.user_id,
                visit_date: visits.visit_date,
                visit_time: visits.visit_time,
                purpose: visits.purpose,
            })

            return visit
        } catch (error) {
            console.log('Error: ', error)
            throw error
        }
    }

    async updateVisit(visits) {
      let data = {}

      try {
          data = await this.db.visits.update(
              { ...visits },
              {
                  where: {
                      user_id: visits.user_id,
                  },
              }
          )
      } catch (error) {
          console.log('Error: ', error)
      }
      return data
  }

    async deleteVisit(visitId) {
        try {
            const visit = await this.db.visits.findByPk(visitId)
            if (!visit) {
                throw new Error(`Visit with ID ${visitId} not found`)
            }
            await visit.destroy()
            return { message: 'Visit deleted successfully' }
        } catch (err) {
            console.error(err)
            throw new Error('Failed to delete visit')
        }
    }
}

module.exports = new VisitRepository()
