import { App } from "vue";
import SvgIcon from "./svg-icon";

const componentArr = [SvgIcon];

const initComponents = (app: App) => {
  componentArr.forEach((item: any) => {
    app.component(item.name, item);
  });
};
export default initComponents;
