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
                //     attributes: ['id', 'name', 'email', 'phone_number', 'type'], // specify the columns you want to include
                // },
            })
            return visit
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async createVisit(visits) {
      console.log("eto yung laman", visits)
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

    //   async updateVisit(visits) {
    //     let data ={}

    //     try {
    //         data = await this.db.visits.update(
    //             { ...visits},
    //             {
    //                 where: {
    //                     id: visits.id,
    //                 },
    //             }
    //         )
    //     } catch (error) {
    //         console.log("Error:", error)
    //     }
    //     return data
    //   }

}

module.exports = new VisitRepository()