import { State } from "./interface";

const state: State = {
  num: 0,
  loading: false,
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
      customIcon: "icon-icon_set_up",
      menuLeaf: true,
      children: [
        {
          key: "0201",
          title: "新增用户组",
          path: "/addManage",
          // icon: "ios-cog-outline",
          inner: true
        },
        {
          key: "0202",
          title: "查看用户组",
          path: "/viewManage",
          // icon: "ios-cog-outline",
          inner: true,
          children: [
            {
              path: "/viewHistory",
              key: "020201",
              title: "查看导入历史",
              inner: true
            }
          ]
        }
      ]
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
