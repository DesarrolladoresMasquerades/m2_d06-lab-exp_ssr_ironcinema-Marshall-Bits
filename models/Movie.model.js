const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema
(
    {
        title: String,
        director: String,
        stars: Array,
        image: String,
        description: String,
        showtimes: Array
      },
)

const Movie =  mongoose.model('Movie', movieSchema);

module.exports = Movie