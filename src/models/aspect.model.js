var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var aspectSchema = new Schema({
  name: String,
  description: String,
  iterationId: String
});

module.exports = mongoose.model('Aspect', aspectSchema);