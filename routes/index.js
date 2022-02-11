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

module.exports = router;
