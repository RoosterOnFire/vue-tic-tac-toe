import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-tic-tac-toe/',
  resolve: {
    alias: [{ find: '@', replacement: resolve('src') }],
  },
  plugins: [vue()],
});
