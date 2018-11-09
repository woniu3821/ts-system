<template>
  <div>
    <Row class="title-top mb-15">
      查看导入历史
    </Row>

    <Row>
      <Table border :columns="historyColumns" :data="historyList"></Table>
      <Page class="mt-15" :total="100" show-elevator show-sizer @on-change="pageNumChange" @on-page-size-change="pageSizeChange"
        show-total />
    </Row>


  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { AxiosPromise, AxiosResponse } from "axios";
import { InterfaceList } from "@/store/interface";

import { TableColumn } from "iview";
@Component({
  components: {}
})
export default class historyUserGroup extends Vue {
  // @Watch("groupBasicForm.type")
  // private watchGroupType(now: number) {
  //   console.log(now);
  // }

  historyList: object[] = [];
  editModalShow: boolean = false;
  get historyColumns(): Array<TableColumn> {
    return [
      {
        title: "操作人",
        key: "jobId"
      },
      {
        title: "导入时间",
        key: "name",
        align: "center"
      },

      {
        title: "总记录数",
        key: "mobile",
        align: "center"
      },
      {
        title: "成功记录数",
        key: "DomainPermission",
        align: "center"
      },
      {
        title: "失败记录数",
        key: "DomainPermission",
        align: "center"
      },
      {
        title: "操作",
        key: "DomainPermission",
        align: "center"
      }
    ];
  }
  private pageNumChange(num: number): void {}
  private pageSizeChange(num: number): void {}
  private groupSelectChange(num: number): void {}
  mounted() {
    // setInterval(() => {
    //   this.show = !this.show;
    // }, 1000);
  }
}
</script>

<style lang="stylus" src="./view.styl" scoped>
</style>
