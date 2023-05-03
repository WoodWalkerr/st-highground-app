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

            const MAX_VISITS_PER_DAY = 3

            if (visitCount >= MAX_VISITS_PER_DAY) {
                return `Sorry, the maximum number of visits (${MAX_VISITS_PER_DAY}) has already been reached for ${visits.visit_date}. Please choose another date.`
            }

            const visit = await this.db.visits.create({
                user_id: visits.user_id,
                visit_date: visits.visit_date,
                visit_time: visits.visit_time,
                purpose: visits.purpose,
                status: visits.status,
            })

            return visit
        } catch (error) {
            console.log('Error: ', error)
            throw error
        }
    }

    // async createPendingOrder(order) {
      
    //     const { order_items, ...newOrder } = order;

    //     try {
    //         const createdOrder = await this.db.orders.create(newOrder)
            
    //         if (createdOrder) {

    //             const createdOrderItem = []

    //             for (let i = 0; i <= order_items.length - 1; i++) {
    //                 order_items[i].order_id = createdOrder.dataValues.order_id
    //                 createdOrderItem[0] = await this.db.order_items.create(order_items[i])
    //             }

    //             return createdOrderItem
                
    //         } else {
    //             console.log("No record was created!")
    //         }

    //         return true

    //     } catch (error) {
    //         console.log('Error: ', error)
    //     }
    // }

    async updateVisit(visits) {
        console.log('visits:', visits)
    
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
