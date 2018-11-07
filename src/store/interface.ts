//===========左侧菜单===========
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

//==============域管理===========
export interface apiInfo {
  wid: string;
  name: string;
  selected: boolean;
}
export interface InterfaceList {
  categoryId?: string;
  categoryName?: string;
  apiRoles?: Array<apiInfo>;
}

//==================State===============
export interface State {
  num: number;
  menus: Array<MenuList>;
}
