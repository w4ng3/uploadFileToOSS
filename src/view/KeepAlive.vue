<template>
  <n-tabs type="line" @update:value="handleUpdateValue">
    <n-tab name="0">
      寂寞围绕着电视
    </n-tab>
    <n-tab name="1">
      垂死坚持
    </n-tab>
    <n-tab name="2">
      在两点半消失
    </n-tab>
  </n-tabs>
  <keep-alive>
    <n-input type="textarea" v-if="tabIndex == 0" placeholder="KeepAlive" />
  </keep-alive>
  <NButton type="primary" v-if="tabIndex == 1">KeepAlive</NButton>
  <n-input type="textarea" v-if="tabIndex == 2" placeholder="NoKeep" />
</template>
<script setup>
import { NTabs, NTab, NInput } from 'naive-ui';
import { ref } from 'vue';
const tabIndex = ref(0)
const handleUpdateValue = (value) => {
  console.log(value);
  tabIndex.value = value
}
</script>
<style lang="scss" scoped>
button {
  margin: auto;
  display: block;
  margin-top: 20px;
}
</style>