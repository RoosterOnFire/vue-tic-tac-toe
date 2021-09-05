import { createApp } from 'vue';
import App from '@/App.vue';
import { store, key } from '@/store/Store';

createApp(App).use(store, key).mount('#app');
