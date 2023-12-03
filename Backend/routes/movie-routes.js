const express = require('express')
const { addMovie, getAllmovies, getMovieById } = require('../controllers/movie-controller')

const movieRouter = express.Router()

movieRouter.post('/',addMovie)
movieRouter.get('/movies',getAllmovies)
movieRouter.get('/:id',getMovieById)

module.exports = movieRouter