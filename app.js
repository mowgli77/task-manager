const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')
const path = require('path')

const app = express()
const PORT = config.get('port') || 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api', require('./api'))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

function start() {
    app.listen(PORT, () => {
        console.log(`Server is started on port ${PORT}`)
    })
}

start()
