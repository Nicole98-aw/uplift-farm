const router = require('express').Router();
const bcrypt = require('bcryptjs');

const User = require('../models/user');

router.post('/signup', (req, res) => {
  console.log(req.body);
  const newUser = new User(req.body);
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      console.log(newUser.password);
      newUser.save()
        .then(data => {
          res.send('saved successfully');
        })
        .catch(err => {
          res.send(err);
        });
    });
  });
});

module.exports = router;
