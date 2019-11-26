var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var iterationSchema = new Schema({
  name: String,
  description: String,
  betaVerificator: Number,
  aspects: [Number]
});

module.exports = mongoose.model('Iteration', iterationSchema);