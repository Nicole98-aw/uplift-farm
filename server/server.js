const express = require('express');
const mongoose = require('mongoose');

const app = express(); //instantiating express app

const port = process.env.PORT || 4000; //specifying the port that will be used by server & if it doesn't exist 3000 is used
mongoose
  .connect('mongodb://localhost:27017/uplift-farm', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful'))
  .catch(err => console.log(err));
app.use(express.json()); //use express to format data

app.use('/', require('./routers/user'));
app.use('/', require('./routers/BuyersPost'));
app.use('/', require('./routers/FarmersPost'));

app.listen(port, () => console.log(`Server is up on port ${port}`));
