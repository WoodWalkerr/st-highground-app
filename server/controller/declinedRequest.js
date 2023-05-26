const declinedRequestServices = require('../service/declinedRequest')

class DeclinedRequestController {
    async getDeclineReq(userID) {
        return await declinedRequestServices.getDeclineReq(userID)
    }
    // async getAllPendingReq() {
    //     return await pendingRequestServices.getAllPendingReq()
    // }
    // async deletePendingReq(id) {
    //     return await pendingRequestServices.deletePendingReq(id)
    // }
}

module.exports = new DeclinedRequestController()
