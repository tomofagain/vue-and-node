import { RouteRecordRaw } from "vue-router";
//存放所有静态路由
export const staticRouter = [
  {
    path: "/",
    name: "layout",
    component: () =>
      import(/* webpackChunkName: "layout" */ "@/layout/index.vue"),
    children: [],
  },

  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/login/src/login.vue"),
  },
];
