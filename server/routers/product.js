const express = require('express');
const Product = require('../models/product');
const router = new express.Router();

router.post('/product', async (req, res) => {
  const product = new Product(req.body);

  try {
    await product.save();
    res.status(201).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});
router.get('/product', async (req, res) => {
  try {
    const product = await Product.find({});
    res.send(product);
  } catch {
    res.status(500).send();
  }
});
router.get('/product/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const product = await Product.findById(_id);
    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch('/product/:id', async (req, res) => {
  //patch is a http method that is used to update info in the database
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'briefDescription', 'location'];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates ' });
  }

  try {
    const product = await Product.findById(req.params.id);

    updates.forEach(update => {
      return (product[update] = req.body[update]);
    });

    await product.save();

    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete('/product/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      res.status(404).send();
    }
    res.send(product);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
