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

app.post('/movies', jsonParser, (req, res) => {
    console.log(req.body.name)
    return res.send(req.body)
})

app.listen(8000, () => {
    console.log("Server started at 127.0.0.1:8000")
})