const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Lấy danh sách các bài viết
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Tạo bài viết mới
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    image: req.body.image,
    summary: req.body.summary
  });

  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
