const pendingRequestRepository = require('../repository/pendingRequest')

class PendingRequestServices {
    async getPendingReq(userID) {
        return await pendingRequestRepository.getPendingReq(userID)
    }
    async getAllPendingReq() {
        return await pendingRequestRepository.getAllPendingReq()
    }
    async deletePendingReq(id) {
        return await pendingRequestRepository.deletePendingReq(id)
    }
}

module.exports = new PendingRequestServices()
