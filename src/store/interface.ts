//===========基础接口===========
export interface MenuList {
  key: string;
  title: string;
  path: string;
  customIcon: string;
  menuLeaf?: boolean;
  children?: Array<ChildrenList>;
  defaultPath?: string;
}
export interface Page {
  //分页参数
  pageNumber: number;
  pageSize: number;
}
export interface listData extends Page {
  totalSize: number;
  rows: Array<any>;
}

export interface ChildrenList {
  key: string;
  title: string;
  path: string;
  inner?: boolean;
  children?: Array<ChildrenList>;
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
// export interface superAppBean {
//   superAppId: string;
//   superAppName: string;
// }

export interface domainBean {
  domainId: string;
  domainName: string;
  description: string;
  isSelected: boolean;
}
export interface SettingBase {
  indeterminate: boolean;
  checkAll: boolean;
  checkAllList: Array<any>;
  checkAllGroup: Array<string>;
  handleCheckAll: Function;
  checkAllGroupChange: Function;
}
//==================State===============
export interface State {
  num: number;
  menus: Array<MenuList>;
}

// 管理员设置
export interface adminQueryInfo extends Page {
  keyword?: string;
  purpose?: string;
  groupId?: string;
  selectedIds?: Array<any>;
}
export interface manageAdd {
  userId: string;
  selectedAppIds: Array<any>;
  selectedDomainIds: Array<any>;
}
