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

    add(movie) {
        this.data.push(movie)
    }

    has(title) {
        let movies = this.find(title)
        return movies.length > 0
    }
}

module.exports = Movie