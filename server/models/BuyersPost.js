const mongoose = require('mongoose');

const buyersPostSchema = new mongoose.Schema({
  productName: {
    required: true,
    type: String
  },
  quantity:{
      required:true,
      type:String
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
  contact: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('BuyersPost', buyersPostSchema);

