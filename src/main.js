import { createApp } from "vue";
import "./style/style.css";
import App from "./App.vue";
import router from "./router";
import {
  // create naive ui
  create,
  // component
  NButton,
  NSpin,
  NResult,
  NEmpty,
} from "naive-ui";

const naive = create({
  components: [NButton, NResult, NSpin],
});

const app = createApp(App);
app.use(router).use(naive);
app.mount("#app");
