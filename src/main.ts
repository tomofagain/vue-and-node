import { createApp } from "vue";
import initComponents from "./components/index";
import App from "./App.vue";
import router, { setupRouter } from "./router";
import "virtual:svg-icons-register"; //引入注册脚本

const app = createApp(App);
setupRouter(app);
console.log(router);

initComponents(app);
router.isReady().then(() => app.mount("#app"));
