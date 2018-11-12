<template>
    <div>
        <Row class="title-top mb-15">
            管理员设置
        </Row>
        <div class="container">
            <Row class="mb-10">
                <Button type="primary" @click="addNewAdmin">新增管理员</Button>
            </Row>
            <Row>
                <Table :columns="columns" :data="tabelList"></Table>
                <Page class="mt-15" :total="totalSize" show-elevator show-sizer @on-change="pageNumChange" @on-page-size-change="pageSizeChange" show-total />  
            </Row>
        </div>
    </div>
</template>
<script lang="ts">
import { Base } from "@/model/base";
import { Action, Getter } from "vuex-class";
import { AxiosPromise, AxiosResponse } from "axios";
import { Page, listData } from "@/store/interface";
import { Component, Watch } from "vue-property-decorator";
@Component
export default class Manage extends Base {
  @Action private MANAGER_QUERY!: (pageInfo: Page) => Promise<listData>;
  @Watch("pageInfo", {
    deep: true
  })
  pageInfoChange(): void {
    this.getTableList();
  }
  private watchNumber() {}
  private watchSize() {}
  private addNewAdmin(): void {
    this.$router.push("addAdmin");
  }
  private totalSize: number = 0;
  private tabelList: Array<any> = [];
  private getTableList() {
    this.MANAGER_QUERY(this.pageInfo)
      .then(res => {
        this.totalSize = res.totalSize;
        this.tabelList = res.rows;
      })
      .catch(err => {
        let msg = err || "获取管理员列表失败！";
        this.error(msg);
      });
  }
  private get columns() {
    // debugger;
    return [
      {
        title: "工号",
        key: "jobId"
      },
      {
        title: "姓名",
        key: "name"
      },
      {
        title: "部门",
        key: "major"
      },
      {
        title: "手机号码",
        key: "mobile"
      },
      {
        title: "菜单权限",
        key: "MenuPermission"
      },
      {
        title: "域权限",
        key: "DomainPermission"
      },
      {
        title: "操作",
        key: "address"
      }
    ];
  }
  private mounted() {
    this.getTableList();
  }
}
</script>

<style lang="stylus" src="./index.styl" scoped>
</style>
