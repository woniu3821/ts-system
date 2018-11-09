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
            <Button @click="insertModal">导入成员</Button>
          </Row>
          <div @click="viewHistory" class="base-text">
            查看导入历史
          </div>
        </Row>
        <Row>
          <Table border :columns="groupColumns" :data="groupData"></Table>
          <Page class="mt-15" :total="100" show-elevator show-sizer @on-change="pageNumChange" @on-page-size-change="pageSizeChange"
            show-total />
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
    <Modal class="insert-modal" width="400" v-model="inserModalShow" title="导入用户组成员">
      <Row type="flex" class="steps-box">
        <Steps class="steps" direction="vertical">
          <Step status="process" title="下载Excel导入模板" content="请务必使用该模板填写用户组成员信息"></Step>
          <Step status="process" title="上传已经填入信息的Excel" content="若学号相同，导入数据将会覆盖原有数据！"></Step>
          <Step status="process" title="系统自动导入" content="并显示导入结果"></Step>
        </Steps>
        <div class="insert-right">
          <Upload multiple action="//jsonplaceholder.typicode.com/posts/">
            <Button><Icon custom="iconfont icon-yunduanxiazai" size="16" color="#777" /><span class="ml-5">下载</span></Button>
          </Upload>
          <Upload multiple action="//jsonplaceholder.typicode.com/posts/">
            <Button type="success"><Icon custom="iconfont icon-shangchuan"  size="14" color="#fff" /><span class="ml-5">上传</span></Button>
          </Upload>
          <div class="inser-loading"><label>导入中...</label><Icon custom="iconfont icon-loading loading"  size="28" color="#B4B7BE" /></div>
        </div>
      </Row>

      <div slot="footer" style="dispaly:none">

      </div>
    </Modal>
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
  inserModalShow: boolean = false;
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
  private insertModal(): void {
    this.inserModalShow = true;
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
