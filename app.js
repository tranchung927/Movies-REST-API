let express = require('express')
let app = express()

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

app.get('/movies/:title/:year', (req, res) => {
    console.log(req.params)
    return res.send(req.params)
})

app.listen(8000, () => {
    console.log("Server started at 127.0.0.1:8000")
})