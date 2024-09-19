import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Nếu bạn đang sử dụng Vue Router

const app = createApp(App);
app.use(router);
app.mount('#app');
