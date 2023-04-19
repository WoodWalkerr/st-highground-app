const visitRepository = require('../repository/visits')

class VisitService {
    async createVisit(visits) {
        return await visitRepository.createVisit(visits)
    }
}

module.exports = new VisitService()
