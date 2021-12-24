import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { staticRouter } from "./static-router";
import { App } from "vue";
const routes: Array<RouteRecordRaw> = [...staticRouter];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export function setupRouter(app: App) {
  app.use(router);
}
router.beforeEach((to, from, next) => {
  next();
});
export default router;
