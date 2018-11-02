let express = require('express')
let bodyParser = require('body-parser')
let app = express()
let moviesRouter = require('./movieRouter')
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use([jsonParser, urlencodedParser])

app.get('/', (req, res) => {
    return res.redirect('/movies')
})
app.use('/movies', moviesRouter)

app.listen(8000, () => {
    console.log("Server started at 127.0.0.1:8000")
})