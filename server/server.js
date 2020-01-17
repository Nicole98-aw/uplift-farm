const express = require('express');
require('./db/mongoose');
const User = require('./models/users');
const cors = require('cors');
const usersRouter = require('./routers/users');
const farmersPostRouter = require('./routers/FarmersPost');
const buyersPostRouter = require('./routers/BuyersPost');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 4000;
require('dotenv').config();

const app = express();
app.use(cors());
// mongodb://localhost:27017/uplift-farm
//mongodb+srv://nicole98:<password>@cluster0-z4h4l.mongodb.net/test?retryWrites=true&w=majority
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connected successfully!'))
  .catch(err => console.error(err.stack));

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('build'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/signup', async (req, res) => {
  // path for creating through /users
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.post('/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

// app.use('/', require('./routers/users'));
app.use(usersRouter);
app.use(farmersPostRouter);
app.use(buyersPostRouter);

app.listen(port, () => console.log('server running on port' + 4000));
