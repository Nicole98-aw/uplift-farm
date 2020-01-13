const express = require('express');
const BuyersPost = require('../models/BuyersPost');
const router = new express.Router();

router.post('/buyersPost', async (req, res) => {
  const buyersPost = new BuyersPost(req.body);

  try {
    await buyersPost.save();
    res.status(201).send(buyersPost);
  } catch (e) {
    res.status(400).send(e);
  }
});
router.get('/buyersPost', async (req, res) => {
  try {
    const buyersPost = await BuyersPost.find({});
    res.send(buyersPost);
  } catch {
    res.status(500).send();
  }
});
router.get('/buyersPost/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const buyersPost = await BuyersPost.findById(_id);
    if (!buyersPost) {
      return res.status(404).send();
    }
    res.send(buyersPost);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch('/buyersPost/:id', async (req, res) => {
  //patch is a http method that is used to update info in the database
  const updates = Object.keys(req.body);
  const allowedUpdates = ['location', 'name', 'contact'];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates ' });
  }

  try {
    const buyersPost = await BuyersPost.findById(req.params.id);

    updates.forEach(update => {
      return (BuyersPost[update] = req.body[update]);
    });

    await buyersPost.save();

    if (!buyersPost) {
      return res.status(404).send();
    }
    res.send(buyersPost);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete('/buyersPost/:id', async (req, res) => {
  try {
    const buyersPost = await BuyersPost.findByIdAndDelete(req.params.id);

    if (!buyersPost) {
      res.status(404).send();
    }
    res.send(buyersPost);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
