<template>
  <div>
    <HelloWorld what="world" />
  </div>
</template>
<script lang="ts">
import { Vue } from 'vue-property-decorator';
import HelloWorld from './HelloWorld.vue';

export default Vue.extend({
  components: {
    HelloWorld
  }
});
</script>