const express = require('express')
const router = require('./server/router')
const sendMail = require('./server/sendMail')
require('dotenv').config();

const server = express()

server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use('/', router)
server.use('/sendmail', sendMail)

const port = process.env.PORT || 5000

server.listen(port, function(){
    console.log("Server is listening on http://localhost:" + port )
})

module.exports = server