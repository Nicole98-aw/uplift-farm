const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const farmersPostSchema = new Schema({
  location: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  contact: {
    type: Number,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  briefDescription: String
});
const farmersPost = mongoose.model('farmersPost', farmersPostSchema);

module.exports = farmersPost;
