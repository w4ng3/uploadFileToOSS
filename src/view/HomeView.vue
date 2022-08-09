<template lang="pug">
AsyncComp(msg="AsyncComponent" :type="1")
</template>
<script setup>
import { defineAsyncComponent } from "vue"
import ErrorComp from '../components/ErrorComp.vue'
import LoadComp from '../components/LoadComp.vue'
// 定义一个耗时执行的函数，t 表示延迟的时间， callback 表示需要执行的函数，可选
const time = (t, callback = () => { }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      callback();
      resolve();
    }, t);
  });
};
// 异步组件
const AsyncComp = defineAsyncComponent({
  loader: async () => {
    await time(5000)
    return import('../components/HelloWorld.vue')
  },
  loadingComponent: LoadComp,
  errorComponent: ErrorComp,
  delay: 200,
  timeout: 3000,
  suspensible: false,
})
</script>
<style lang="scss" scoped>
</style>