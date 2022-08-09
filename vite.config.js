import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({ refTransform: true }), vueJsx({})],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  base: "./",
  server: {
    host: "0.0.0.0",
  },
});
