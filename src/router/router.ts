export const routes = [
  {
    path: "/adminSetting",
    name: "adminSetting",
    component: () => import("@/views/setting/adminSetting.vue")
    // meta: { name: "管理员设置", icon: "home" }
  },
  {
    path: "/addAdmin",
    name: "addAdmin",
    component: () => import("@/views/setting/addAdmin.vue")
  },
  {
    path: "/domainManage",
    name: "domainManage",
    component: () => import("@/views/manage/domainManage.vue")
  },
  {
    path: "/logAudit",
    name: "logAudit",
    component: () => import("@/views/audit/logAudit.vue")
  }
];
