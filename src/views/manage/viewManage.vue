<template>
  <div>
    <Row class="title-top mb-15">
      查看用户组
    </Row>
    <div class="container width-820">
      <Row>
        <title-bar title="基本信息">
          <div slot="extra" class="extra-btn" @click="editModal">编辑</div>
        </title-bar>
        <div class="basic-container mb-20">
          <table class="cus-table">
            <tr>
              <th>用户组类型</th>
              <td>普通用户组</td>
              <th>用户组名称</th>
              <td>老师组</td>
            </tr>
            <tr>
              <th>用户组描述</th>
              <td colspan="3">普通用户组普通用户组普通用户组</td>
            </tr>
          </table>
        </div>
      </Row>
      <Row>
        <title-bar class="mb-20" :title="`用户组成员（${30}人）`">
        </title-bar>
        <Input style="width:300px" v-model="groupSearch" placeholder="搜索工号/学号、姓名" search enter-button></Input>
        <Row type="flex" align="middle" justify="space-between" class="mt-15 mb-10">
          <Row>
            <Button type="primary" @click="addModal" class="mr-20">新增成员</Button>
            <Button>导入成员</Button>
          </Row>
          <div @click="viewHistory" class="base-text">
            查看导入历史
          </div>
        </Row>
        <Row>
            <Table border :columns="groupColumns" :data="groupData"></Table>
            <Page class="mt-15" :total="100" show-elevator show-sizer @on-change="pageNumChange" @on-page-size-change="pageSizeChange" show-total />  
        </Row>
       
      </Row>
    </div>
    <!-- <Modal class="group-modal" v-model="groupModal" width="700" title="预览成员" @on-visible-change="groupModalChanges">
      <Table height="350" @on-selection-change="groupSelectChange" border :columns="groupColumns" :data="groupData"></Table>
      <Page class="mt-10" size="small" :total="100" show-sizer @on-change="pageNumChange" @on-page-size-change="pageSizeChange"
        show-total />
      <div slot="footer" style="dispaly:none">

      </div>
    </Modal> -->
    <modal-box :show.sync="editModalShow" title="编辑基本信息" :ok="{text:'保存'}">
      <Form :model="groupBasicForm" :label-width="90">
        <FormItem label="用户组名称" prop="name" :rules="{required: true, message:'用户组名称不能为空', trigger: 'blur'}">
          <Input v-model="groupBasicForm.name" placeholder=""></Input>
        </FormItem>
        <FormItem label="用户组描述" prop="desc">
          <Input v-model="groupBasicForm.desc" type="textarea" :autosize="{minRows: 5,maxRows: 7}" placeholder=""></Input>
        </FormItem>
      </Form>
    </modal-box>
    <modal-box width="1200" :show.sync="addModalShow" title="新增成员">
     <group-box :modal="true"></group-box>
    </modal-box>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { AxiosPromise, AxiosResponse } from "axios";
import { InterfaceList } from "@/store/interface";
import titleBar from "@/components/titleBar/titleBar.vue";
import modalBox from "@/components/modalBox/modalBox.vue";
import groupBox from "@/components/groupBox/groupBox.vue";
import { TableColumn } from "iview";
@Component({
  components: {
    titleBar,
    modalBox,
    groupBox
  }
})
export default class viewUserGroup extends Vue {
  // @Watch("groupBasicForm.type")
  // private watchGroupType(now: number) {
  //   console.log(now);
  // }
  groupSearch: string | number = "";
  groupData: object[] = [];
  editModalShow: boolean = false;
  addModalShow: boolean = false;
  private groupBasicForm: object = {
    type: 1,
    name: "",
    desc: "",
    switch: false
  };
  get groupColumns(): Array<TableColumn> {
    return [
      {
        title: "工号/学号",
        key: "jobId"
      },
      {
        title: "姓名",
        key: "name",
        align: "center"
      },

      {
        title: "性别",
        key: "mobile",
        align: "center"
      },
      {
        title: "部门/院系",
        key: "DomainPermission",
        align: "center"
      },
      {
        title: "角色",
        key: "DomainPermission",
        align: "center"
      }
    ];
  }
  private editModal(): void {
    this.editModalShow = true;
  }
  private addModal(): void {
    this.addModalShow = true;
  }
  private viewHistory(): void {
    this.$router.push("/viewHistory");
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
