import Vue from 'vue';

new Vue({
    el: '#app',
    components: {
      App: () => import('./App.vue'),
    },
  });