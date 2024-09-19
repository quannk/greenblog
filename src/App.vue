<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Trang chủ</router-link></li>
        <li><router-link to="/life">Cuộc sống</router-link></li>
        <li><router-link to="/tourist">Du lịch</router-link></li>
        <li><router-link to="/book">Đọc sách</router-link></li>
        <li><router-link to="/Climate">Khí hậu</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
/* Thêm màu nền xanh cho thanh nav */
nav {
  background-color: #42b983; /* Màu xanh của Vue.js */
  padding: 10px;
  box-shadow: 0 4px 2px -2px gray;
}

/* Tạo danh sách các mục trong thanh điều hướng */
nav ul {
  list-style-type: none;
  margin: 30;
  padding: 0;
  display: flex;
  justify-content: space-around; /* Căn đều các mục */
  align-items: center;
}

/* Định dạng cho các mục trong danh sách */
nav ul li {
  margin: 0 35px;
}

/* Định dạng cho các liên kết */
nav ul li a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 18px;
}

/* Thêm hiệu ứng hover cho liên kết */
nav ul li a:hover {
  color: #e3f2fd; /* Màu sáng hơn khi di chuột qua */
}

/* Cân đối và căn chỉnh thanh nav */
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-radius: 5px;
}
</style>