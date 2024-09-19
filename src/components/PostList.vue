<template>
    <div>
      <h2>Blog Posts</h2>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <p>{{ post.content }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [
          {
            id: 1,
            title: 'Hello Vue.js',
            content: 'This is my first blog post about Vue.js!',
          },
          {
            id: 2,
            title: 'Learning Vue Components',
            content: 'Components in Vue.js are reusable and composable!',
          },
          {
            id: 3,
            title: 'Vue.js Routing',
            content: 'Learn about Vue Router to handle navigation!',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Thêm CSS tùy chỉnh nếu cần */
  h3 {
    color: #42b983;
  }
  </style>
  