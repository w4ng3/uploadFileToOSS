<script setup>
import { defineAsyncComponent, ref } from 'vue'
const props = defineProps({
  msg: String,
  type: {
    type: Number,
    default: 1
  }
});
// 异步组件
const AsyncComponent = defineAsyncComponent(() => {
  if (props.type) {
    return import('./CompA.vue')
  } else {
    return import('./CompB.vue')
  }
})
const count = ref(0);
</script>

<template>
  <div>
    <AsyncComponent></AsyncComponent>
    <h1>{{ msg }}</h1>
    <div class="card"><button type="button" @click="count++">count is {{ count }}</button></div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

@font-face {
  font-family: "FrederickatheGreat";
  src: url('../assets/FrederickatheGreat-Regular.ttf');
}

h1 {
  font-family: 'FrederickatheGreat';
}
</style>
