const express = require('express')
const router = require('./server/router')

const server = express()

server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use('/', router)

const port = process.env.PORT || 5000

server.listen(port, function(){
    console.log("Server is listening on http://localhost:" + port )
})

module.exports = server