const bcrypt = require('bcryptjs')
const { connect } = require('../config/db')
const users = require('../model/users')
const visits = require('../model/visit')


class UserRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    async getAllUsers() {
        try {
            const users = await this.db.users.findAll({
            order: [['id', 'ASC']],
            // include: {
            //   model: this.db.visits,
            //   attributes: ['id', 'date', 'time', 'purpose'] // specify the columns you want to include
            // }
          });
          return users;
        } catch (error) {
          console.log('Error: ', error);
        }
      }

    async getUserById(id) {
        try {
            const user = await this.db.users.findByPk(id)
            if (!user) {
            } else {
            }
            return user
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async getUserByEmail(email, password) {
        try {
            
        } catch (error) {
            
        }
    }

    async createUser(users) {
        let userData = {}

        try {
            const password = users.password
            const salt = bcrypt.genSaltSync(10)
            const hashedPassword = bcrypt.hashSync(password, salt)

            userData = { ...users, password: hashedPassword }
            const createdUser = await this.db.users.create(userData)
            return createdUser
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async updateUser(users) {
        let data = {}

        try {
            data = await this.db.users.update(
                { ...users },
                {
                    where: {
                        id: users.id,
                    },
                }
            )
        } catch (error) {
            console.log('Error: ', error)
        }
        return data
    }

    async deleteUser(id) {
        try {
            const user = await this.db.users.destroy({ where: { id } })
            return user
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    
    async createVisit(visits) {
        try {
            // Find the associated user based on the "user_id" value
            const user = await this.db.users.findOne({
              where: { id: visits.user_id }
            });
          const visit = await this.db.visits.create({
            id: 1,
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

module.exports = new UserRepository()

