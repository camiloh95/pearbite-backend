const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/beta', {useNewUrlParser: true})
        .then(db => console.log('db connected'))
        .catch(err => console.log(err));

module.exports = mongoose;