const router = require('express').Router();

const BuyersPost = require('../models/BuyersPost');

router.post('/buyerspost', async (req, res) => {
  const buyerspost = new BuyersPost(req.body);

  try {
    await buyerspost.save();
    res.status(201).send(buyerspost);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post('/buyerspostdata', async (req, res) => {
  try {
    const buyersData = await BuyersPost.find();
    res.status(201).send(buyersData);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete('/buyerspost/:id', async (req, res) => {
  console.log(req.params.id);
  try {
    const buyerspost = await BuyersPost.findByIdAndDelete(req.params.id);

    // if (!farmerspost) {
    //   res.status(404).send();
    // }
    res.status(200).send(buyerspost);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
