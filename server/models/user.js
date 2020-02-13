const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullNames: {
    required: true,
    type: String
  },
  role: {
    type: Array,
    required: true
  },
  email: { 
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
