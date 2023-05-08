const acceptedRequestRepository = require('../repository/acceptedRequest')

class AcceptedRequestServices {
    async getAcceptedReq(userID) {
        return await acceptedRequestRepository.getAcceptedReq(userID)
    }
//     async getAllPendingReq() {
//         return await acceptedRequestRepository.getAllPendingReq()
//     }
//     async deletePendingReq(id) {
//         return await acceptedRequestRepository.deletePendingReq(id)
//     }
}

module.exports = new AcceptedRequestServices()
