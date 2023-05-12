const { connect } = require('../config/db')
const { Op } = require('sequelize')
const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')

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

    // async searchVisitsByUserName (visits) {
    //     try {
    //       const visits = await this.db.visits.findAll(visits);
    //       res.json(visits);
    //     } catch (error) {
    //       console.error('Error searching visits:', error);
    //       res.status(500).json({ error: 'Internal server error' });
    //     }
    //   };

    async createVisit(visits) {
        try {
            const visitCount = await this.db.visits.count({
                where: {
                    user_id: visits.user_id,
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

    async sendVisitAcceptedEmail(visits) {
        try {
            const visit = await this.db.visits.findOne({
                where: {
                    user_id: visits.user_id
                }
            });
            if (visit.status !== 'accepted') {
                return 'Visit status must be accepted to send email'
            }
            const user = await this.db.users.findByPk(visit.user_id, {
                where: {
                  id: visit.user_id
                }
              });
            const email = user.email
            const transporter = nodemailer.createTransport({
                service: "gmail",
                host: "smtp-gmail.com",
                secure: false,
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.EMAIL_PASS,
                },
                tls: {
                  rejectUnauthorized: false,
                },
            })
            const mailOptions = {
                from: 'melvsbagolaque@gmail.com',
                to: email,
                subject: 'Visit Accepted',
                text: `Your visit on ${visit.visit_date} at ${visit.visit_time} for ${visit.purpose} has been accepted.`,
            }
            const info = await transporter.sendMail(mailOptions)
            console.log(`Email sent: ${info.messageId}`)
            const notification = await this.db.notification.findOne({
                where: {
                  user_id: user.id, // Use `user.id` instead of `user.user_id`
                  email: email
                } 
              });

            return notification
        } catch (error) {
            console.error(error)
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
