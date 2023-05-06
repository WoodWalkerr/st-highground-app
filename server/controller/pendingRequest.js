const pendingRequestServices = require('../service/pendingRequest')

class PendingRequestController {
    async getPendingReq(userID) {
        return await pendingRequestServices.getPendingReq(userID)
    }
    async getAllPendingReq() {
        return await pendingRequestServices.getAllPendingReq()
    }
    async deletePendingReq(id) {
        return await pendingRequestServices.deletePendingReq(id)
    }
}

module.exports = new PendingRequestController()
