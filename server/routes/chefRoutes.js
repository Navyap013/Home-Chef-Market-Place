const express = require('express');
const router = express.Router();
const Chef = require('../models/Chef');

// Get all chefs
router.get('/', async (req, res) => {
  try {
    const chefs = await Chef.find();
    res.json(chefs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new chef
router.post('/', async (req, res) => {
  const { name, location, specialties, image } = req.body;

  const newChef = new Chef({
    name,
    location,
    specialties,
    image
  });

  try {
    const savedChef = await newChef.save();
    res.status(201).json(savedChef);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
