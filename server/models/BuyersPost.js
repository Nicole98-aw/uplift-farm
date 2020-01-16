const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buyersPostSchema = new Schema({
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
  briefDescription: String,

  quantity: String
});
const BuyersPost = mongoose.model('BuyersPost', buyersPostSchema);

module.exports = BuyersPost;
