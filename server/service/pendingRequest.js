const pendingRequestRepository = require('../repository/pendingRequest')

class PendingRequestServices {
    // async getPendingReq(id) {
    //     return await pendingRequestRepository.getPendingReq(id)
    // }
    async getAllPendingReq() {
        return await pendingRequestRepository.getAllPendingReq()
    }
    async deletePendingReq(id) {
        return await pendingRequestRepository.deletePendingReq(id)
    }
}

module.exports = new PendingRequestServices()
