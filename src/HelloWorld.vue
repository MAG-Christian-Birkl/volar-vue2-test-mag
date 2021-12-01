<template>
  <div>
      Hello {{ what }}!
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
@Component({})
export default class HelloWorld extends Vue {
    @Prop()
    what: string | undefined;
}
</script>