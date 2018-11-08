export const routes = [
  {
    path: "/adminSetting",
    name: "adminSetting",
    component: () => import("@/views/setting/adminSetting.vue")
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
    path: "/addManage",
    name: "addManage",
    component: () => import("@/views/manage/addManage.vue")
  },
  {
    path: "/viewManage",
    name: "viewManage",
    component: () => import("@/views/manage/viewManage.vue")
  },
  {
    path: "/viewHistory",
    name: "viewHistory",
    component: () => import("@/views/manage/viewHistory.vue")
  },
  {
    path: "/logAudit",
    name: "logAudit",
    component: () => import("@/views/audit/logAudit.vue")
  }
];
// meta: { name: "管理员设置", icon: "home" }
