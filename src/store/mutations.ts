import { TABLE_POST, LOADINF_SHOW } from "./types";
import { MutationTree } from "vuex";

const mutations: MutationTree<any> = {
  [TABLE_POST](state, data) {
    state.list = data;
  },
  add(state) {
    state.num++;
  },
  reduce(state) {
    state.num--;
  },
  [LOADINF_SHOW](state, data) {
    state.loading = data;
  }
};

export default mutations;
