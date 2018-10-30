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

    update(title, newInfo) {
        let movies = this.find(title)
        if (movies.length < 1) {
            return false
        }
        let oldMovie = movies.pop()
        let newMovie = Object.assign(oldMovie, newInfo)

        let oldMoviesList = this.data.filter( m => m.Title !== title)
        this.data = [...oldMoviesList, newMovie]
        return true
    }

    remove(title) {
        this.data = this.data.filter( m => m.Title !== title)
    }
}

module.exports = Movie