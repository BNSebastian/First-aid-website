const express = require('express')
const path = require('path')
require('./mongoose')

const app = express()
// locatie Express config
const publicDirectoryPath = path.join(__dirname, '../public')
// setare director static ce va fi servit
app.use(express.static(publicDirectoryPath))

const Result = require('./result')
app.use(express.json())

// trimite o intrare catre mongoDB
app.post('/results', (req,res) => {
    const result = new Result(req.body)

    result.save().then(() => {
        res.send(result)
    }).catch((e) => {
        res.send(e)
    })
})

// primeste toate intrarile din mongoDB
app.get('/results',(req, res) => {
    Result.find({}).then((results) => {
        res.send((results))
    }).catch((e) => {
        res.send(e)
    })
})

// initializare server la portul specificat
const port = 3000
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
