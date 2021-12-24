import { App } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

export const setupElement = (app: App) => {
  app.use(ElementPlus);
};
