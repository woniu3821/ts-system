import { State } from "./interface";

const state: State = {
  list: [],
  num: 0,
  menus: [
    {
      key: "01",
      title: "管理员设置",
      path: "/adminSetting",
      customIcon: "icon-icon_set_up",
      menuLeaf: true,
      children: [
        {
          key: "0101",
          title: "新增管理员",
          path: "/addAdmin",
          // icon: "ios-cog-outline",
          inner: true
        }
      ],
      defaultPath: "/adminSetting"
    },
    {
      key: "02",
      title: "域管理",
      path: "/domainManage",
      customIcon: "icon-icon_set_up"
    },
    {
      key: "03",
      title: "日志审计",
      path: "/logAudit",
      customIcon: "icon-icon_set_up"
    }
  ]
};

export default state;
