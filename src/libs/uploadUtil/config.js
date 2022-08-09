const fileHost = "https://riddler.oss-cn-shanghai.aliyuncs.com";

export let config = {
  //aliyun OSS config
  uploadImageUrl: `${fileHost}`, //默认存在根目录，可根据需求改
  AccessKeySecret: "***************",
  OSSAccessKeyId: "**************",
  timeout: 1, //这个是上传文件时Policy的失效时间
};
