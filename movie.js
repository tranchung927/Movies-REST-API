class Movie {
    constructor() {
        this.data = require('./datastore.json')
    }

    all() {
        return this.data
    }

    find(title) {
        return this.data.filter(m => m.Title === title)
    }
}

module.exports = Movie