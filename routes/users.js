var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var userSchema = new mongoose.Schema({
  post: String,  
});

module.exports = mongoose.model('user', userSchema);