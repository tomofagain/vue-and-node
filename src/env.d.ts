declare module "*.vue" {
  import { App, defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void;
  };
  export default component;
}
declare module "*.scss" {
  //帮助ts识别scss文件
  const classes: { readonly [key: string]: string };
  export default classes;
}
