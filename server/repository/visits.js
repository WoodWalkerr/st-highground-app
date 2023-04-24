const { connect } = require('../config/db')
const visits = require('../model/visits')

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
            const visit = await this.db.visits.create({
                user_id: visits.user_id,
                visit_date: visits.visit_date,
                visit_time: visits.visit_time,
                purpose: visits.purpose,
            })
            return visit
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async updateVisit(visitId, newStatus) {
      try {
        const [numUpdated, updatedVisit] = await this.db.visits.update(
          { status: newStatus },
          { where: { id: visitId }, returning: true }
        );
        if (numUpdated === 0) {
          throw new Error(`Visit with ID ${visitId} not found`);
        }
        return updatedVisit;
      } catch (error) {
        console.log("Error:", error);
        throw error;
      }
    }
}

module.exports = new VisitRepository()
