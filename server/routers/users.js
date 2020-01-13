const express = require('express');
const Users = require('../models/users');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.post('/register', (req, res) => {
  const { fullNames, email, password, password2 } = req.body;
  if (!fullNames || !email || !password || !password2) {
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
            password
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
        res.send(user);
      } else {
        res.send({ err: 'Password incorrect' });
      }
    });
  });
});

module.exports = router;
