let express = require('express')
let app = express()

let movies = require('./movie')

let movieStore = new movies()

let handlerMovieData = (req, res) => {
    return res.send(movieStore.all())
}

app.get('/', (req, res) => {
    return res.send("Hello World!!")
})

app.get('/movies', handlerMovieData)

app.listen(8000, () => {
    console.log("Server started at 127.0.0.1:8000")
})