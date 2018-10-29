let express = require('express')
let app = express()

const datastore = require('./datastore.json')

let handlerData = (req, res) => {
    return res.send(datastore)
}

app.get('/', (req, res) => {
    return res.send("Hello World!!")
})

app.get('/data', handlerData)

app.listen(8000, () => {
    console.log("Server started at 127.0.0.1:8000")
})