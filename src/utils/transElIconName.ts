interface Res {}

export function transElIconName(iconName: String) {
  //重写el-icon命名规则
  return (
    "self" + iconName.replace(/[A-Z]/g, (match) => "-" + match.toLowerCase())
  );
}
