<template>
  <div class="avatar">
    <input ref="uploadRef" type="file" accept="image/*" style="display: none" @change="handleFile" />
    <img class="avatar--img" :src="avatar" alt="头像" />
    <img class="avatar--edit" src="@/assets/bianji.png" @click="uploadImg" />
  </div>
</template>
<script setup>
import uploadImage from '@/libs/uploadUtil/uploadOSS.js'
import { ref } from 'vue';

//修改头像
const avatar = ref('https://w2gd.oss-cn-nanjing.aliyuncs.com/up/xinyeai.jpg')
const uploadRef = ref()
const uploadImg = () => {
  uploadRef.value.click()
}
const handleFile = (e) => {
  let target = e.target || e.srcElement
  let file = target.files[0]
  uploadImage.uploadFile({
    filePath: file,
    dir: 'avatar/',
    success: (res) => {
      console.log(res)
      avatar.value = res
    },
    fail: (res) => {
      console.log(res)
    }
  })
}
</script>

<style lang="scss" scoped>
.avatar {
  width: 200px;
  height: 200px;
  overflow: hidden;
  position: relative;
  margin: auto;

  &--img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  &--edit {
    position: absolute;
    bottom: 5px;
    right: 5px;
    cursor: pointer;
  }
}
</style>