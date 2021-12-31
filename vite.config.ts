import { defineConfig } from "vite";
import viteSvgIcons from "vite-plugin-svg-icons";
import path from "path";
import vue from "@vitejs/plugin-vue";
/**按需自动导入element-plus */
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import vueJsx from "@vitejs/plugin-vue-jsx"; // 配置jsx

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    viteSvgIcons({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/icon")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "#": path.resolve(__dirname, "./node_modules"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/style/public.scss";',
      },
    },
  },
});
