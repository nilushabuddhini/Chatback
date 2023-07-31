const express = require('express')

const { createChat, getall, getone } = require('../controllers/control')

const routes = express.Router()

routes.get('/',
    getall
)
routes.post('/', 
    createChat
)
routes.post('/:id',
    getone
)

module.exports = routes