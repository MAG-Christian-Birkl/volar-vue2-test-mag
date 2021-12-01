import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
export default () => {
  return defineConfig({
    resolve: {
      alias: [
        { find: 'vue', replacement: 'vue/dist/vue.esm.js' },
        { find: '@', replacement: '/src/' }
      ]
    },
    plugins: [
      createVuePlugin()
    ],
    server: {
      port: 3000
    },
    base: ''
  });
};
