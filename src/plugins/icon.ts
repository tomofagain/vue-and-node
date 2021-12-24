import { App } from "vue";
import * as ElIconModules from "@element-plus/icons-vue"; // 统一导入el-icon图标
import { transElIconName } from "@/utils/transElIconName";

export const setupIcon = (app: App) => {
  // 统一注册el-icon图标
  for (let iconName in ElIconModules) {
    app.component(transElIconName(iconName), ElIconModules[iconName]);
  }
};
