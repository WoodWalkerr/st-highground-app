const visitRepository = require('../repository/visits')

class VisitService {
    async createVisit(visits) {
        return await visitRepository.createVisit(visits)
    }

    async getAllVisits(visits) {
        return await visitRepository.getAllVisits(visits)
    }
    async updateVisit(visits) {
        return await visitRepository.updateVisit(visits)
    }
}

module.exports = new VisitService()
