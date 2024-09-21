<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <!-- Section 1: Profile và giới thiệu -->
    <section class="section profile-section" v-if="profile">
      <div class="profile-container">
        <img :src="profile.image" alt="Profile Image" class="profile-image">
        <div class="profile-description">
          <h2>Giới thiệu</h2>
          <p>{{ profile.description }}</p>
        </div>
      </div>
    </section>

    <!-- Section 2: Danh sách kỹ năng (phần tĩnh) -->
    <section class="section skills-section">
      <h2>Kỹ năng của tôi</h2>
      <div class="skills-list">
        <div class="skill-item" v-for="(skill, index) in skills" :key="index">
          <img :src="skill.image" alt="Skill Image">
          <p>{{ skill.description }}</p>
        </div>
      </div>
    </section>

    <!-- Section 3: Bài viết nổi bật -->
    <section class="section featured-posts-section">
      <h2>Bài viết nổi bật</h2>
      <div class="featured-posts">
        <div class="post-item" v-for="(post, index) in featuredPosts" :key="index">
          <img :src="post.image" alt="Post Image" class="post-image">
          <h3>{{ post.title }}</h3>
          <p>{{ post.summary }}</p>
        </div>
      </div>
    </section>

    <!-- Section 4: Các đối tác -->
    <section class="section partners-section">
      <h2>Các đối tác</h2>
      <div class="partners-list">
        <div class="partner-item" v-for="(partner, index) in partners" :key="index">
          <img :src="partner.logo" alt="Partner Logo" class="partner-logo">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      profile: null,
      skills: [
        { image: 'https://example.com/skill1.jpg', description: 'Kỹ năng phát triển web' },
        { image: 'https://example.com/skill2.jpg', description: 'Thiết kế UI/UX' }
      ],
      featuredPosts: [],
      partners: []
    };
  },

  mounted() {
    // Lấy profile
    axios.get('http://localhost:5000/profile')
      .then(response => {
        this.profile = response.data;
      })
      .catch(error => console.error(error));

    // Lấy bài viết
    axios.get('http://localhost:5000/posts')
      .then(response => {
        this.featuredPosts = response.data;
      })
      .catch(error => console.error(error));

    // Lấy đối tác
    axios.get('http://localhost:5000/partners')
      .then(response => {
        this.partners = response.data;
      })
      .catch(error => console.error(error));
  }
}
</script>

<style scoped>
/* CSS cho các section */
</style>
