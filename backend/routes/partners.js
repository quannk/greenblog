const express = require('express');
const router = express.Router();
const Partner = require('../models/Partner');

// Lấy danh sách các đối tác
router.get('/', async (req, res) => {
  try {
    const partners = await Partner.find();
    res.json(partners);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Tạo đối tác mới
router.post('/', async (req, res) => {
  const partner = new Partner({
    logo: req.body.logo
  });

  try {
    const newPartner = await partner.save();
    res.status(201).json(newPartner);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
