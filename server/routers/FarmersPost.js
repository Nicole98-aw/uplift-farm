const router = require('express').Router();

const FarmersPost = require('../models/FarmersPost');

router.post('/farmerspost', async (req, res) => {
  const farmerspost = new FarmersPost(req.body);

  try {
    await farmerspost.save();
    res.status(201).send(farmerspost);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post('/farmerspostdata', async (req, res) => {
  try {
    const farmersData = await FarmersPost.find();
    res.status(201).send(farmersData);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete('/farmerspost/:id', async (req, res) => {
  console.log(req.params.id);
  try {
    const farmerspost = await FarmersPost.findByIdAndDelete(req.params.id);

    // if (!farmerspost) {
    //   res.status(404).send();
    // }
    res.status(200).send(farmerspost);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
