const pendingRequestServices = require('../service/pendingRequest')

class PendingRequestController {
    // async getPendingReq(id) {
    //     return await pendingRequestServices.getPendingReq(id)
    // }
    async getAllPendingReq() {
        return await pendingRequestServices.getAllPendingReq()
    }
    async deletePendingReq(id) {
        return await pendingRequestServices.deletePendingReq(id)
    }
}

module.exports = new PendingRequestController()
