class Movie {
    constructor() {
        this.moviesData = require('./movies.json')
    }

    all() {
        return this.moviesData
    }

    find(title) {
        return this.moviesData.filter(m => m.title === title)
    }

    add(movie) {
        this.moviesData.push(movie)
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

        let oldMoviesList = this.moviesData.filter( m => m.title !== title)
        this.moviesData = [...oldMoviesList, newMovie]
        return true
    }

    remove(title) {
        this.moviesData = this.moviesData.filter( m => m.title !== title)
    }

    search(title) {
        return this.moviesData.filter( m => m.title.includes(title) )
    }
}

module.exports = Movie