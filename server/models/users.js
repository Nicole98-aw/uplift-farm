const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullNames: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String
  },
  password: {
    type: String,
    required: true,
    minLength: 8
  }
});
const User = mongoose.model('User', userSchema);

module.exports = User;
