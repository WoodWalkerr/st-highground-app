const { connect } = require('../config/db')


class VisitRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    async createVisit(visits) {
        try {
          const visit = await this.db.visits.create({
            user_id: visits.user_id,
            visit_date: visits.visit_date,
            visit_time: visits.visit_time,
            purpose: visits.purpose
          });
          return visit;
        } catch (error) {
          console.log('Error: ', error);
        }
      }
}

module.exports = new VisitRepository()