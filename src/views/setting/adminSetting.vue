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
    <modal-box @on-ok="deleteSure" :show.sync="deleteModel" title="确认删除" :ok="{text:'删除',type:'error'}">
      <Icon type="md-help-circle" size="50" color="#ff9900"/>
      <span style="margin-left:10px">您确认删除这个管理员吗？</span>
    </modal-box>
    </div>
</template>
<script lang="ts">
import { Base } from "@/model/base";
import { Action, Getter } from "vuex-class";
import { AxiosPromise, AxiosResponse } from "axios";
import { Page, listData, manageList } from "@/store/interface";
import { Component, Watch } from "vue-property-decorator";
import modalBox from "@/components/modalBox/modalBox.vue";
import { TableColumn } from "iview";
@Component({
  components: {
    modalBox
  }
})
export default class Manage extends Base {
  @Action private MANAGER_QUERY!: (pageInfo: Page) => Promise<listData>;
  @Action private MANAGE_DELETE!: (wid: object) => Promise<any>;
  @Watch("pageInfo", {
    deep: true
  })
  pageInfoChange(): void {
    this.getTableList();
  }
  private wid: string = "";
  private deleteModel: boolean = false;
  private watchNumber() {}
  private watchSize() {}
  private addNewAdmin(): void {
    this.$router.push("addAdmin");
  }
  private totalSize: number = 0;
  private tabelList: Array<manageList> = [];
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
  deleteSure(): void {
    this.MANAGE_DELETE({ wid: this.wid })
      .then(res => {
        this.success("删除成功！");
        this.getTableList();
        this.deleteModel = false;
      })
      .catch(err => {
        let msg = err || "删除失败！";
        this.error(msg);
      });
  }
  private get columns(): Array<TableColumn> {
    // debugger;
    return [
      {
        title: "工号",
        key: "userAccount"
      },
      {
        title: "姓名",
        key: "userName"
      },
      {
        title: "部门",
        key: "userDepartment"
      },
      {
        title: "手机号码",
        key: "phoneNumber"
      },
      {
        title: "菜单权限",
        key: "menuPermission"
      },
      {
        title: "域权限",
        key: "domainPermission"
      },
      {
        title: "操作",
        align: "center",
        render: (h, params) => {
          let wid = params.row.wid;
          return h(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }
            },
            [
              h(
                "div",
                {
                  style: { marginRight: "5px", color: "#4481F1" },
                  on: {
                    click: () => {
                      this.$router.push({
                        name: "addAdmin",
                        params: {
                          wid
                        }
                      });
                    }
                  }
                },
                "编辑 |"
              ),

              h(
                "div",
                {
                  style: {
                    color: "#4481F1"
                  },
                  on: {
                    click: () => {
                      this.deleteModel = true;
                      this.wid = wid;
                    }
                  }
                },
                "删除"
              )
            ]
          );
        }
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
