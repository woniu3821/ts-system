import { Component, Vue, Mixins } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { domainBean } from "@/store/interface";
import { Error } from "@/model/base";
@Component
export class domainListMinxins extends Mixins(Error) {
  @Action DOMAIN_APPS!: () => Promise<any>;
  domainList: Array<domainBean> = [];
  getdomainList() {
    this.DOMAIN_APPS()
      .then(res => {
        this.domainList = res;
      })
      .catch(err => {
        let msg = "获取域列表失败！" || err;
        this.error(msg);
      });
  }
  mounted() {
    this.getdomainList();
  }
}
