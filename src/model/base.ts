import { Component, Vue, Watch } from "vue-property-decorator";
import { Page } from "@/store/interface";
import { MessageConfig } from "iview";
import { Action, Getter, Mutation } from "vuex-class";
import { SettingBase } from "@/store/interface";
@Component
export class Loading extends Vue {
  @Mutation("LOADINF_SHOW") public loading!: (state: boolean) => void;
}
//错误信息model
export class Error extends Loading {
  private config: MessageConfig = { content: "", duration: 3 };
  success(msg: string) {
    this.config.content = msg;
    this.$Message.success(this.config);
  }
  warning(msg: string) {
    this.config.content = msg;
    this.$Message.warning(this.config);
  }
  error(msg: string) {
    this.loading(false);
    this.config.content = msg;
    if (typeof msg !== "object") {
      this.$Message.error(this.config);
    }
  }
}
//分页model
@Component
export class Base extends Error {
  pageInfo: Page = {
    pageNumber: 1,
    pageSize: 10
  };
  pageNumChange(num: number): void {
    this.pageInfo.pageNumber = num;
  }
  pageSizeChange(num: number): void {
    this.pageInfo.pageSize = num;
  }
}

@Component
export class Setting extends Error {
  private base: SettingBase = {
    indeterminate: false,
    allDisabled: true,
    checkAll: false,
    checkAllList: [],
    checkAllGroup: [],
    handleCheckAll(): void {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;
      if (this.checkAll) {
        this.checkAllGroup = this.all();
      } else {
        this.checkAllGroup = [];
      }
    },
    checkAllGroupChange(data: Array<string>): void {
      if (data.length === this.checkAllList.length) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    },
    all(): Array<string> {
      return this.checkAllList.map(item => item.domainId || item.appId);
    },
    disabled(checked: boolean): void {
      this.allDisabled = checked;
      this.indeterminate = false;
      this.checkAll = false;
      for (let item of this.checkAllList) {
        item.isSelected = checked;
      }
    }
  };
  public baseSpace: SettingBase = Object.assign({}, this.base);
  public domainSpace: SettingBase = Object.assign({}, this.base);
  @Action MANAGE_BASE_APPS!: () => Promise<any>;
  domainBaseApps() {
    this.MANAGE_BASE_APPS()
      .then(res => {
        this.baseSpace.checkAllList = res;
      })
      .catch(err => {
        let msg = err || "获取域权限失败！";
        this.error(msg);
      });
  }
  @Action DOMAIN_APPS!: () => Promise<any>;
  domainApps() {
    this.DOMAIN_APPS()
      .then(res => {
        this.domainSpace.checkAllList = res;
      })
      .catch(err => {
        let msg = err || "获取菜单权限失败！";
        this.error(msg);
      });
  }

  mounted() {
    this.domainBaseApps();
    this.domainApps();
  }
}
