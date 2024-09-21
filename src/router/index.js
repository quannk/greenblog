import { createRouter, createWebHistory } from 'vue-router'; // Import đúng trong Vue 3

// Import các component cho router
import Home from '../views/Home.vue';
import CuocSong from '../views/CuocSong.vue';
import DuLich from '../views/DuLich.vue';
import KhiHau from '../views/KhiHau.vue';
import DocSach from '../views/DocSach.vue'


// Khai báo các route
const routes = [
  {
    path: '/',
    name: 'Trang chủ',
    component: Home
  },
  {
    path: '/cuocsong',
    name: 'Cuộc sống',
    component: CuocSong
  },
  {
    path: '/dulich',
    name: 'Du lịch',
    component: DuLich
  },
  {
    path: '/docsach',
    name: 'Đọc sách',
    component: DocSach
  },
  {
    path: '/khi-hau',
    name: 'Khí hậu',
    component: KhiHau
  }
];

// Tạo instance của Vue Router
const router = createRouter({
  history: createWebHistory(), // Sử dụng chế độ lịch sử (history mode)
  routes
});

export default router;
