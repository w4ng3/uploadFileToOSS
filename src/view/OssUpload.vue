<!-- OSS文件上传简易版 -->
<template>
  <n-upload action="" :default-upload="false" multiple @change="handleChange" file-list-style="display:none">
    <NButton>修改头像</NButton>
  </n-upload>
  <img :src="imgurl">
</template>

<script setup>
import OSS from 'ali-oss'
import { ref } from 'vue';
import { NUpload } from 'naive-ui';
import { config } from '@/libs/uploadUtil/config'
const imgurl = ref('https://w2gd.oss-cn-nanjing.aliyuncs.com/up/xinyeai.jpg')
const handleChange = (options) => {
  let file = options.fileList[0].file
  // sdk提供的创建客户端实例方法
  const client = new OSS({
    region: 'oss-cn-shanghai', // 创建Bucket时会选择不同地区，根据自己的选择填入对应名称
    accessKeyId: config.OSSAccessKeyId,  // 填入你的accessKeyId
    accessKeySecret: config.AccessKeySecret, // 填入你的accessKeySecret
    bucket: 'riddler' // 填入你的bucket名
  })

  const Name = file.name
  const suffix = Name.substr(Name.indexOf('.')) // 文件后缀
  const filename = Date.parse(new Date()) + suffix // 组成新文件名
  // 上传文件到bucket的指定文件夹:【upload】
  client.multipartUpload(`upload/${filename}`, file).then(res => {
    console.log('上传成功：', res)
    // ... 你的操作，可以拼接图片url，用于显示等...
    imgurl.value = `${config.fileHost}/${res.name}`
  }).catch(err => {
    console.log('上传失败：', err)
  })
}
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>