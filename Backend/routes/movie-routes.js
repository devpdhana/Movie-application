const express = require('express')
const { addMovie, getAllmovies } = require('../controllers/movie-controller')

const movieRouter = express.Router()

movieRouter.post('/',addMovie)
movieRouter.get('/movies',getAllmovies)

module.exports = movieRouter