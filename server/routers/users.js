const express = require('express');
const Users = require('../models/users');
const router = new express.Router();

router.post('/users', async (req, res) => {
  const users = new Users(req.body);

  try {
    await users.save();
    res.status(201).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
});
router.get('/users', async (req, res) => {
  try {
    const users = await Users.find({});
    res.send(users);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});
router.get('/users/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const users = await Users.findById(_id);
    if (!users) {
      return res.status(404).send();
    }
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch('/users/:id', async (req, res) => {
  //patch is a http method that is used to update info in the database
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'fullNames',
    'email',
    'role',
    'password',
    'password2'
  ];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates ' });
  }

  try {
    const users = await Users.findById(req.params.id);

    updates.forEach(update => {
      return (users[update] = req.body[update]);
    });

    await users.save();

    if (!users) {
      return res.status(404).send();
    }
    res.send(users);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const users = await Users.findByIdAndDelete(req.params.id);

    if (!users) {
      res.status(404).send();
    }
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
