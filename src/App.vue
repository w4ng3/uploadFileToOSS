<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { useRoute } from "vue-router";
const route = useRoute()
</script>

<template>
  <div style="margin-bottom: 20px;">
    <router-link to="/">
      <NButton type="error">Home</NButton>
    </router-link>
    <router-link to="/alive">
      <NButton type="warning">Alive</NButton>
    </router-link>
    <router-link to="/render">
      <NButton type="primary">Render</NButton>
    </router-link>
    <router-link to="/abstract">
      <NButton type="info">Abstract</NButton>
    </router-link>
    <router-link to="/oss">
      <NButton type="error">UploadOss</NButton>
    </router-link>
    <router-link to="/oss2">
      <NButton type="warning">UploadOssPlus</NButton>
    </router-link>
  </div>

  <router-view v-slot="{ Component }">
    <keep-alive include="HomeView,KeepAlive" :max="10">
      <component :is="Component" />
    </keep-alive>
  </router-view>

</template>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo .vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
