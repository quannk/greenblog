const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Tạo ứng dụng Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Chuỗi kết nối MongoDB Atlas (thay đổi <username>, <password>, <dbname> theo thông tin của bạn)
const dbURI = 'mongodb+srv://quannkcap:quanchelsea1@greenblog.whein.mongodb.net/?retryWrites=true&w=majority&appName=Greenblog';

mongoose.connect(dbURI )
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));


// Import các route
const postRoutes = require('./routes/posts');
const partnerRoutes = require('./routes/partners');
const profileRoutes = require('./routes/profile');

// Sử dụng các route
app.use('/posts', postRoutes);
app.use('/partners', partnerRoutes);
app.use('/profile', profileRoutes);

// Chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
