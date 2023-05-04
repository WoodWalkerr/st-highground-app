const visitorLogRepository = require('../repository/visitorLog')

class VisitorLogServices {
    async getLogById(id) {
        return await visitorLogRepository.getLogById(id)
    }
    async getAllLogs(visitlogs) {
        return await visitorLogRepository.getAllLogs(visitlogs)
    }
    async deleteLog(id) {
        return await visitorLogRepository.deleteLog(id)
    }
}

module.exports = new VisitorLogServices()
