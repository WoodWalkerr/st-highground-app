const { connect } = require('../config/db')

class PendingRequestRepository {
    db = {}
    constructor() {
        this.db = connect()
    }

      
}

module.exports = new PendingRequestRepository()
