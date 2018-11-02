let express = require('express')
let MovieStore = require('./movie')
let movieStore = new MovieStore()
let moviesRouter = express.Router()

let paginate = require('./util/pageinate')

let handlerMovieData = (req, res) => {
    let moviesData = movieStore.all()

    let page = parseInt(req.query.page) || 1,
        size = parseInt(req.query.size) || 3

    if (req.query.title) {
        moviesData = movieStore.search(req.query.title)
    }
    let result = paginate(moviesData, size, page)
    return res.json({
        message: "OK",
        title: req.query.title,
        current_page: page,
        size_one_page: size,
        total_page: Math.ceil(moviesData.length/size),
        payload: result
    })
}



moviesRouter.get('/', handlerMovieData)


// /movies/The Game
// route parameter

moviesRouter.get('/:title', (req, res) => {
    
    let foundMovies = movieStore.find(req.params.title)
    if (foundMovies.lenghth < 1) {
        res.statusCode = 404
        return res.json({
            message: "Movie not found"
        })
    }
    return res.json({
        message: "Found Movie",
        payload: foundMovies.pop()
    })
})


moviesRouter.put('/:title', (req, res) => {

    if (!movieStore.update(req.params.title, req.body)) {
        res.statusCode = 500 // Internal Server Error
        return res.json ({
            message: "Failed to update movie info"
        })
    }

    return res.json({
        message: "Update movie successfully",
        payload: movieStore.all()
    })
})

moviesRouter.post('/', (req, res) => {

    console.log(req.body)
    if (!req.body.title || req.body.title.trim().length < 1) {
        res.statusCode = 400
        return res.json({
            message: "Missing or invalid title"
        })
    }

    if (movieStore.has(req.body.title)) {
        res.statusCode = 400
        return res.json({
            message: "Movie already exited"
        })
    }

    movieStore.add(req.body)
    return res.json({
        message: "Movie added successfully"
    })
})

moviesRouter.delete('/:title', (req, res) => {

    if (!movieStore.has(req.params.title)) {
        res.statusCode = 404
        return res.json({
            message: "movie not found"
        })
    }

    movieStore.remove(req.params.title)

    return res.json ({
        message: "Delete movie successfully",
        payload: movieStore.all()
    })
})

module.exports = moviesRouter