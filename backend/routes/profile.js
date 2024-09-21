const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// Lấy profile
router.get('/', async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Tạo hoặc cập nhật profile
router.post('/', async (req, res) => {
  const profile = new Profile({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image
  });

  try {
    const newProfile = await profile.save();
    res.status(201).json(newProfile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
