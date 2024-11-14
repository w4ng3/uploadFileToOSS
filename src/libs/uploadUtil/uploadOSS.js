import { config } from "./config.js";
import { Base64 } from "./Base64.js";
import { Crypto } from "./crypto.js";
import randomWord from "./randomWord.js";
import axios from "axios";
import "./hmac.js";
import "./sha1.js";

const uploadFile = function (params) {
  console.log("params:", params);
  if (!params.filePath || params.filePath.length < 9) {
    alert("图片错误，请重试");
    return;
  }

  var name =
    new Date().getTime() +
    randomWord(false, 16) +
    "." +
    params.filePath.name.substring(params.filePath.name.lastIndexOf(".") + 1);
  const aliyunFileKey = params.dir + name;

  const aliyunServerURL = config.fileHost;
  const accessid = config.OSSAccessKeyId;
  const policyBase64 = getPolicyBase64();
  const signature = getSignature(policyBase64);
  console.log("******************");
  console.log("aliyunFileKey:", aliyunFileKey);
  console.log("policyBase64:", policyBase64);
  console.log("accessid:", accessid);
  console.log("signature:", signature);
  console.log("******************");
  let formData = new FormData();
  formData.append("key", aliyunFileKey);
  formData.append("policy", policyBase64);
  formData.append("OSSAccessKeyId", accessid);
  formData.append("signature", signature);
  formData.append("success_action_status", 200);
  formData.append("file", params.filePath);
  axios({
    url: aliyunServerURL,
    method: "POST",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => {
      console.log("res:", res);
      if (res.status != 200) {
        if (params.fail) {
          params.fail(res);
        }
        return;
      }
      if (params.success) {
        params.success(aliyunServerURL + "/" + aliyunFileKey);
      }
    })
    .catch((err) => {
      err.wxaddinfo = aliyunServerURL;
      if (params.fail) {
        params.fail(err);
      }
    });
};

const getPolicyBase64 = function () {
  let date = new Date();
  date.setHours(date.getHours() + config.timeout);
  console.log(date.setHours(date.getHours() + config.timeout));
  let srcT = date.toISOString();
  console.log("Policy的失效时间", srcT);
  const policyText = {
    expiration: srcT, //设置该Policy的失效时间
    conditions: [
      ["content-length-range", 0, 100 * 1024 * 1024], // 设置上传文件的大小限制,10mb
    ],
  };
  const policyBase64 = Base64.encode(JSON.stringify(policyText));
  return policyBase64;
};
const getSignature = function (policyBase64) {
  const accesskey = config.AccessKeySecret;
  const bytes = Crypto.HMAC(Crypto.SHA1, policyBase64, accesskey, {
    asBytes: true,
  });
  const signature = Crypto.util.bytesToBase64(bytes);
  return signature;
};
export default { uploadFile };
