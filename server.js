const express = require('express')
const hbs = require('express-handlebars')
const router = require('./router')

const server = express()

server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
}))

server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use('/', router)

module.exports = server