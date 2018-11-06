//菜单
export interface MenuList {
  key: string;
  title: string;
  path: string;
  customIcon: string;
  menuLeaf?: boolean;
  children?: Array<ChildrenList>;
  defaultPath?: string;
}
export interface ChildrenList {
  key: string;
  title: string;
  path: string;
  inner?: boolean;
}
//表格
export interface Tablelist {
  name?: string;
}
export interface State {
  list: Array<Tablelist>;
  num: number;
  menus: Array<MenuList>;
}
