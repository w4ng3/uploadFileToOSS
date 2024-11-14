
export let config = {
  //aliyun OSS config
  fileHost: import.meta.env.VITE_OSS_FileHost, //默认存在根目录，可根据需求改
  AccessKeySecret: import.meta.env.VITE_OSS_AccessKeySecret,
  OSSAccessKeyId: import.meta.env.VITE_OSS_AccessKeyID,
  timeout: 1, //这个是上传文件时Policy的失效时间
};
