# Web 端 PostObject 直传 AliyunOSS

- `OssUpload.vue`是使用`ali-oss`SDK 完成的。
- `OssUploadPlus.vue`是自己封装上传工具，在`@/libs/uploadUtil`文件夹下。

## 使用须知

根目录添加一个 `.env`文件，填写以下配置使用：

> \* 号替换成你自己的 oss 配置和密钥

```env
# 阿里云OSS
VITE_OSS_FileHost=https://****.*****.aliyuncs.com
VITE_OSS_AccessKeyID=**********
VITE_OSS_AccessKeySecret=********
```

> Tips: 使用 RAM 用户的`accessKeySecret`，限制权限更加安全。
