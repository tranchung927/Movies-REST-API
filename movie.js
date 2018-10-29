class Movie {
    constructor() {
        this.data = require('./datastore.json')
    }

    all() {
        return this.data
    }
}

module.exports = Movie