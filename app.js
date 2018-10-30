let express = require('express')
let bodyParser = require('body-parser')
let app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

let movies = require('./movie')

let movieStore = new movies()

let handlerMovieData = (req, res) => {
    return res.send(movieStore.all())
}

app.get('/', (req, res) => {
    return res.redirect('/movies')
})

app.get('/movies', handlerMovieData)


// /movies/The Game
// route parameter

app.get('/movies/:title', (req, res) => {
    
    let foundMovies = movieStore.find(req.params.title)
    if (foundMovies.lenghth < 1) {
        res.statusCode = 404
        return res.send({
            message: "Movie not found"
        })
    }
    return res.send({
        message: "Found Movie",
        payload: foundMovies.pop()
    })
})


app.put('/movies/:title', urlencodedParser, (req, res) => {

    if (!movieStore.update(req.params.title, req.body)) {
        res.statusCode = 500 // Internal Server Error
        return res.send ({
            message: "Failed to update movie info"
        })
    }

    return res.send({
        message: "Update movie successfully",
        payload: movieStore.all()
    })
})

app.post('/movies', jsonParser, (req, res) => {

    if (!req.body.Title || req.body.Title.trim().length < 1) {
        res.statusCode = 400
        return res.send({
            message: "Missing or invalid title"
        })
    }

    if (movieStore.has(req.body.Title)) {
        res.statusCode = 400
        return res.send({
            message: "Movie already exited"
        })
    }

    movieStore.add(req.body)
    return res.send({
        message: "Movie added successfully"
    })
})

app.listen(8000, () => {
    console.log("Server started at 127.0.0.1:8000")
})