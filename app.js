let express = require("express")
let app = express()

app.get('/', (req, res) => {
    res.send("Hello World!!")
})

app.listen(8000, () => {
    console.log("Server started at 127.0.0.1:8000")
})