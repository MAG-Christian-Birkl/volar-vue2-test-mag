<template>
  <div>
    <HelloWorld what="world" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import HelloWorld from './HelloWorld.vue';
@Component({
  components: { HelloWorld },
})
export default class App extends Vue {
}
</script>