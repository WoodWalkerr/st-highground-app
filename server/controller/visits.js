// const { deleteUser } = require('../repository/users')
const visitService = require('../service/visits')

class VisitController {
    async createVisit(visits) {
        return await visitService.createVisit(visits)
    }
    // async searchVisitsByUserName(visits) {
    //     return await visitService.searchVisitsByUserName(visits)
    // }
    async getAllVisits(visits) {
        return await visitService.getAllVisits(visits)
    }
    async updateVisit(visits) {
        return await visitService.updateVisit(visits)
    }
    async sendVisitAcceptedEmail(visits) {
        await visitService.sendVisitAcceptedEmail(visits)
    }
}

module.exports = new VisitController()
