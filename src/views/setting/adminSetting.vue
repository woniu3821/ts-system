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
                <Page class="mt-15" :total="100" show-elevator show-sizer @on-change="pageNumChange" @on-page-size-change="pageSizeChange" show-total />  
            </Row>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { AxiosPromise, AxiosResponse } from "axios";
@Component
export default class adminSetting extends Vue {
  // data
  private tabelList: Array<any> = [];
  // computed
  get columns() {
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
  //methods
  private addNewAdmin(): void {
    this.$router.push("addAdmin");
  }
  private pageNumChange(num: number): void {}
  private pageSizeChange(num: number): void {}
}
</script>

<style lang="stylus" src="./index.styl" scoped>
</style>
