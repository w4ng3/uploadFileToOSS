import * as VueRouter from "vue-router";
import HomeView from "../view/HomeView.vue";
const routes = [
  {
    name: "HomeView",
    path: "/",
    component: HomeView,
  },
  {
    name: "KeepAlive",
    path: "/alive",
    component: () => import("../view/KeepAlive.vue"),
  },
  {
    name: "RenderView",
    path: "/render",
    component: () => import("../view/RenderView.vue"),
  },
  {
    name: "AbstractView",
    path: "/abstract",
    component: () => import("../view/AbstractView.vue"),
  },
  {
    name: "OssUpload",
    path: "/oss",
    component: () => import("../view/OssUpload.vue"),
  },
  {
    name: "OssUploadPlus",
    path: "/oss2",
    component: () => import("../view/OssUploadPlus.vue"),
  },
];

const router = VueRouter.createRouter({
  // 使用 HTML5 的历史记录模式
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
