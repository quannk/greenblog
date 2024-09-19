<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <!-- Section 1: Profile và giới thiệu -->
    <section class="section profile-section">
      <div class="profile-container">
        <img :src="require('@/assets/profile.jpg')" alt="Profile Image" class="profile-image">
        <div class="profile-description">
          <h2>Giới thiệu</h2>
          <p>{{ profileDescription }}</p>
        </div>
      </div>
    </section>

    <!-- Section 2: Danh sách kỹ năng -->
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
export default {
  data() {
    return {
      profileDescription: 'Tôi là Nguyễn Văn A, một nhà phát triển web với niềm đam mê xây dựng các giải pháp sáng tạo và hiệu quả.',

      skills: [
        { image: require('@/assets/skill1.jpg'), description: 'Kỹ năng phát triển web' },
        { image: require('@/assets/skill2.jpg'), description: 'Kỹ năng phát triển ứng dụng di động' },
        { image: require('@/assets/skill3.jpg'), description: 'Thiết kế UI/UX' },
        { image: require('@/assets/skill4.jpg'), description: 'Kỹ năng quản lý dự án' }
      ],

      featuredPosts: [
        { image: require('@/assets/post1.jpg'), title: 'Bài viết 1', summary: 'Tóm tắt bài viết 1' },
        { image: require('@/assets/post2.jpg'), title: 'Bài viết 2', summary: 'Tóm tắt bài viết 2' },
        { image: require('@/assets/post3.jpg'), title: 'Bài viết 3', summary: 'Tóm tắt bài viết 3' },
        { image: require('@/assets/post4.jpg'), title: 'Bài viết 4', summary: 'Tóm tắt bài viết 4' },
        { image: require('@/assets/post5.jpg'), title: 'Bài viết 5', summary: 'Tóm tắt bài viết 5' }
      ],

      // Danh sách các đối tác
      partners: [
        { logo: require('@/assets/partner1.png') },
        { logo: require('@/assets/partner2.png') },
        { logo: require('@/assets/partner3.png') },
        { logo: require('@/assets/partner4.png') }
      ]
    }
  }
}
</script>

<style scoped>
/* Định dạng chung cho các section */
.section {
  padding: 40px 20px;
  margin-bottom: 20px;
}

/* Section 1: Profile */
.profile-container {
  display: flex;
  align-items: center;
}
.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
}
.profile-description {
  flex: 1;
}
.profile-description h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

/* Section 2: Kỹ năng */
.skills-section {
  text-align: center;
}
.skills-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.skill-item {
  width: 22%;
  margin-bottom: 20px;
  text-align: center;
}
.skill-item img {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}

/* Section 3: Bài viết nổi bật */
.featured-posts {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.post-item {
  width: 30%;
  margin-bottom: 20px;
  text-align: center;
}
.post-item img.post-image {
  width: 350px; /* Chỉnh kích thước ảnh bài viết nhỏ hơn */
  height: 350px; /* Chiều cao nhỏ hơn */
}
.post-item h3 {
  font-size: 18px;
  margin-top: 10px;
}

/* Section 4: Các đối tác */
.partners-section {
  text-align: center;
}
.partners-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.partner-item {
  width: 150px;
  margin-bottom: 20px;
}
.partner-logo {
  width: 100%; /* Đảm bảo logo chiếm toàn bộ chiều rộng của container */
  height: auto;
}
</style>
