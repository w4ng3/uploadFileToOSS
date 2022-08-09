<template>
  <div>
    <h1>自定义抽象组件</h1>
    <debounce>
      <NButton type="primary" @click="++count">防抖计数: {{ count }}</NButton>
    </debounce>
    <hr>
    <NButton type="error" @click="++count">普通计数: {{ count }}</NButton>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import debounce from '../components/debounce';
const count = ref(0)
</script>