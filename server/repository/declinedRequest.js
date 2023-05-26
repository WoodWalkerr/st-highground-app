const { connect } = require('../config/db')

class DeclinedRequestRepository {
    db = {}
    constructor() {
        this.db = connect()
    }

    async getDeclineReq(userID) {
        try {
            const visits = await this.db.visits.findAll({
                where: {
                    user_id: userID,
                    status: 'declined',
                },
                order: [
                    ['visit_date', 'ASC'],
                    ['visit_time', 'ASC'],
                ],
                include: [
                    {
                        model: this.db.users,
                        as: 'user',
                        attributes: ['name'],
                    },
                ],
            })
            return visits
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    // async deletePendingReq(id) {
    //     try {
    //         const users = await this.db.pendingRequest.findByPk(id)
    //         if (!users) {
    //         } else {
    //         }
    //         return users
    //     } catch (error) {
    //         console.log('Error: ', error)
    //     }
    // }

    // async deleteLog(id) {
    //     try {
    //         const visit = await this.db.pendingRequest.findByPk(id)
    //         if (!visit) {
    //             throw new Error(`Visit with ID ${id} not found`)
    //         }
    //         await visit.destroy()
    //         return { message: 'Visit deleted successfully' }
    //     } catch (err) {
    //         console.error(err)
    //         throw new Error('Failed to delete visit')
    //     }
    // }
}

module.exports = new DeclinedRequestRepository()
