import { install } from "@vueuse/core/node_modules/vue-demi";
import animated from "animate.css"; // npm install animate.css --save安装，再引入
import { App } from "vue";

const setupAnimate = (app: App) => {
  app.use(animated);
};
