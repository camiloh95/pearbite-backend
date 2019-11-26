var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var videogameSchema = new Schema({
  name: String,
  description: String,  
  iterations: [Number]
});

module.exports = mongoose.model('Videogame', videogameSchema);