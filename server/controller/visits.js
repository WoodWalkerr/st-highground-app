// const { deleteUser } = require('../repository/users')
const visitService = require('../service/visits')

class VisitController {
    async createVisit(visits) {
        return await visitService.createVisit(visits);
    }
} 

module.exports = new VisitController()
