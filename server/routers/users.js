const express = require('express');
const Users = require('../models/users');
const router = express.Router();
const bcrypt = require('bcryptjs');

const { welcome, refresh } = require('../jwt/handler');

// setting up jsonwebtoken
const jwt = require('jsonwebtoken');

const jwtSecretKey = 'my_secret_key';
const jwtExpirySeconds = 300;

// const users = {
//   user1: 'password1',
//   user2: 'password2'
// };

router.post('/register', (req, res) => {
  const { fullNames, email, password, password2, role } = req.body;
  if (!fullNames || !email || !password || !password2 || !role) {
    res.send({ err: 'Please fill all fields!' });
  } else if (password !== password2) {
    res.send({ err: 'Passwords do not match!' });
  } else if (password && password.length < 6) {
    res.send({ err: 'Password should be at least 6 charcters!' });
  } else {
    Users.findOne({ email: email })
      .then(user => {
        if (user) {
          res.send({ err: 'The email is already registered!' });
        } else if (!user) {
          const newUser = new Users({
            fullNames,
            email,
            password,
            role
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(() => res.send('Registration successful!'))
                .catch(err => console.error(err));
            });
          });
        }
      })
      .catch(err => console.error(err.stack));
  }
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // validate for emptiness in the req.body
  if (!email && !password) {
    // return 401 error is username or password doesn't exist, or if password does
    // not match the password in our records
    return res.status(401).end();
  }
  // Match user
  Users.findOne({
    email: email
  }).then(user => {
    if (!user) {
      res.send({ err: 'That email is not registered' });
    }
    // Match password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        // generate a token using the user email and user id
        console.log(user);
        const { email, _id } = user;
        const token = jwt.sign({ email, _id }, jwtSecretKey, {
          algorithm: 'HS256',
          expiresIn: jwtExpirySeconds
        });
        console.log('token:', token);

        // set the cookie as the token string, with a similar max age as the token
        // here, the max age is in milliseconds, so we multiply by 1000
        res
          .cookie('token', token, { maxAge: jwtExpirySeconds * 1000 })
          .send(token);
        // res.end();
      } else {
        res.send({ err: 'Password incorrect' });
      }
    });
  });
});

router.post(`/homepage`, welcome, refresh, (req, res) => {
  console.log(req.payload);
  res.send('Successfully visited our homepage');
});

module.exports = router;
