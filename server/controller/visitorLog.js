const visitorLogServices = require('../service/visitorLog')

class VisitorLogController {
    async getLogById(id) {
        return await visitorLogServices.getLogById(id)
    }
    async getAllLogs(visitlogs) {
        return await visitorLogServices.getAllLogs(visitlogs)
    }
    async deleteLog(id) {
        return await visitorLogServices.deleteLog(id)
    }
}

module.exports = new VisitorLogController()
