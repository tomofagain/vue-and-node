import { createApp } from "vue";
import App from "./App.vue";
import "element-plus/dist/index.css";
import router, { setupRouter } from "./router";
import initComponents from "./components/index";
import { setupIcon } from "./plugins/icon";
import "virtual:svg-icons-register"; //引入注册脚本

// import { setupElement } from "./plugins/element"; //推荐使用按需导入

const app = createApp(App);

setupRouter(app);
setupIcon(app);
initComponents(app);
router.isReady().then(() => app.mount("#app"));
