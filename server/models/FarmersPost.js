const mongoose = require('mongoose');

const farmersPostSchema = new mongoose.Schema({
  productName: {
    required: true,
    type: String
  },
  briefDescription: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  contact:{
      type: Number,
      required:true
  }
});

module.exports = mongoose.model('FarmersPost', farmersPostSchema);
