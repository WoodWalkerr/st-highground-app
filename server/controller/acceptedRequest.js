const acceptedRequestServices = require('../service/acceptedRequest')

class AcceptedRequestController {
    async getAcceptedReq(userID) {
        return await acceptedRequestServices.getAcceptedReq(userID)
    }
    // async getAllPendingReq() {
    //     return await pendingRequestServices.getAllPendingReq()
    // }
    // async deletePendingReq(id) {
    //     return await pendingRequestServices.deletePendingReq(id)
    // }
}

module.exports = new AcceptedRequestController()
