
const declinedRequestRepository = require('../repository/declinedRequest')

class DeclinedRequestServices {
    async getDeclineReq(userID) {
        return await declinedRequestRepository.getDeclineReq(userID)
    }
//     async getAllPendingReq() {
//         return await declinedRequestRepository.getAllPendingReq()
//     }
//     async deletePendingReq(id) {
//         return await declinedRequestRepository.deletePendingReq(id)
//     }
}

module.exports = new DeclinedRequestServices()
