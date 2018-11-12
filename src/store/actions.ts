import {
  TABLE_POST,
  USER_LIST_GET,
  MANAGER_QUERY,
  MANAGER_USER_QUERY,
  MANAGER_ADD,
  MANAGE_BASE_APPS,
  DOMAIN_APPS,
  DOMAIN_MANAGER
} from "./types";
import { ActionTree } from "vuex";
import ajax from "@/utils/api";
import { AxiosResponse } from "axios";
const actions: ActionTree<any, any> = {
  async [TABLE_POST]({ state, commit }, data) {
    const res = await ajax.post("/userv2/getUserByCondition", data);
    return new Promise((resolve, reject) => {
      if (res.status === 200 && res.data.code == 0) {
        resolve(res.data.datas.rows);
      } else {
        reject(res.data.message);
      }
    });
  },
  async [USER_LIST_GET]({ commit }, data) {
    const res = await ajax.get("/user");
    return new Promise(resolve => {
      if (res.status === 200) {
        resolve(res.data);
      }
    });
  },
  // =========================管理员设置======================
  //查询设置的管理员
  async [MANAGER_QUERY]({ commit }, data) {
    const res = await ajax.post("/manager/queryManager", data);
    return new Promise((resolve, reject) => {
      if (res.status === 200 && res.data.code == 0) {
        resolve(res.data.datas);
      } else {
        reject(res.data.message);
      }
    });
  },
  //根据工号、姓名查询人员列表
  async [MANAGER_USER_QUERY]({ commit }, data) {
    const res = await ajax.post("/usermanager/query", data);
    return new Promise((resolve, reject) => {
      if (res.status === 200 && res.data.code == 0) {
        resolve(res.data.datas);
      } else {
        reject(res.data.message);
      }
    });
  },
  //添加管理员
  async [MANAGER_ADD]({ commit }, data) {
    const res = await ajax.post("/manager/addManager", data);
    return new Promise((resolve, reject) => {
      if (res.status === 200 && res.data.code == 0) {
        resolve(res.data.datas);
      } else {
        reject(res.data.message);
      }
    });
  },
  //菜单权限
  async [MANAGE_BASE_APPS]({ commit }, data) {
    const res = await ajax.post("/manager/getBaseApps", data);
    return new Promise((resolve, reject) => {
      if (res.status === 200 && res.data.code == 0) {
        resolve(res.data.datas);
      } else {
        reject(res.data.message);
      }
    });
  },
  //域权限
  async [DOMAIN_APPS]({ commit }, data) {
    const res = await ajax.post("/domainmanager/query", data);
    return new Promise((resolve, reject) => {
      if (res.status === 200 && res.data.code == 0) {
        resolve(res.data.datas);
      } else {
        reject(res.data.message);
      }
    });
  },
  // ====================域管理==========================
  //获取域列表
  reduce({ commit }) {
    commit("reduce");
  }
};
export default actions;
