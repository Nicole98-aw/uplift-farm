const express = require('express');
require('./db/mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 4000;

const app = express();

mongoose
  .connect('mongodb://localhost:27017/uplift-farm', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connected successfully!'))
  .catch(err => console.error(err.stack));

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('build'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/', require('./routers/users'));
app.listen(port, () => console.log(`server running on port ${port}`));
