const { connect } = require('../config/db')

class visitorLogRepository {
    db = {}
    constructor() {
        this.db = connect()
    }


      
}

module.exports = new visitorLogRepository()
