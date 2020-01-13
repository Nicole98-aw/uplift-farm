const express = require('express');
const FarmersPost = require('../models/FarmersPost');
const router = new express.Router();

router.post('/farmersPost', async (req, res) => {
  const farmersPost = new FarmersPost(req.body);

  try {
    await farmersPost.save();
    res.status(201).send(farmersPost);
  } catch (e) {
    res.status(400).send(e);
  }
});
router.get('/farmersPost', async (req, res) => {
  try {
    const farmersPost = await FarmersPost.find({});
    res.send(farmersPost);
  } catch {
    res.status(500).send();
  }
});
router.get('/farmersPost/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const farmersPost = await FarmersPost.findById(_id);
    if (!farmersPost) {
      return res.status(404).send();
    }
    res.send(farmersPost);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch('/farmersPost/:id', async (req, res) => {
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
    const farmersPost = await FarmersPost.findById(req.params.id);

    updates.forEach(update => {
      return (farmersPost[update] = req.body[update]);
    });

    await farmersPost.save();

    if (!farmersPost) {
      return res.status(404).send();
    }
    res.send(farmersPost);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete('/farmersPost/:id', async (req, res) => {
  try {
    const farmersPost = await FarmersPost.findByIdAndDelete(req.params.id);

    if (!farmersPost) {
      res.status(404).send();
    }
    res.send(farmersPost);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
