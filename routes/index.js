const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//Iteration 3 creating movies route

router.get('/movies', (req, res, next)=>{
    Movie.find()
    .then((movies)=> {
        res.render("movies", {movies})
    })
    .catch((err)=>"Error getting movies list" + err)
})

router.get('/movies/:id', (req, res, next)=>{
    const id = req.params.id
    Movie.findById(id)
    .then((movie)=>{
        res.render('movie', movie)
    })
})

module.exports = router;
