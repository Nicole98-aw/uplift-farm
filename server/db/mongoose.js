const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/uplift-farmers', {
  //connecting to the database
  useNewUrlParser: true, // used to read data from the database
  useCreatedIndex: true //use to create indices
});
