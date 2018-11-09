<template>
    <div>
    <Row class="title-top mb-15">
      日志审计
    </Row>
        <Form @keydown.native.enter.prevent ="keyDownEvent" :model="logForm" ref="logForm" :label-width="75" label-position="left">
        <Row :gutter="15">
          <Col span="10">
          <FormItem label="搜索：" prop="searchContent">
            <Input v-model="logForm.searchContent" placeholder="搜索用户名、姓名、手机号" @on-enter="searchLog"></Input>
          </FormItem>
          </Col>
        </Row>
        <Row :gutter="15">
          <Col span="5">
          <FormItem  prop="level" label="模块名称：">
            <Select v-model="logForm.level">
              <!-- <Option v-for="(item,index) in deptList" :key="index" :value="item.id">{{item.name}}</Option> -->
            </Select>
          </FormItem>
          </Col>
          <Col span="5">
          <FormItem label="操作类型：" prop="major">
            <Select v-model="logForm.major">
              <!-- <Option v-for="(item,index) in majorList" :key="index" :value="item.id">{{item.name}}</Option> -->
            </Select>
          </FormItem>
          </Col>
          <Col span="8">
          <FormItem label="操作时间：" prop="userType">
           <DatePicker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="Select date and time(Excluding seconds)" style="width:100%"></DatePicker>
          </FormItem>
          </Col>
          <Col span="4">
          <Row type="flex" justify="center" align="middle">
            <Button  @click="searchLog" type="primary">查询</Button>
            <a href="javascript:;" class="ml-15" @click="resetLogForm">重置</a>
          </Row>
          </Col>
        </Row>
        </Form>
        <Row>
        <Table border :columns="logColumns" :data="logData"></Table>
        <Page class="mt-15" :total="100" show-elevator show-sizer @on-change="pageNumChange" @on-page-size-change="pageSizeChange"
            show-total />
        </Row>
        <Modal
            v-model="logModal"
            title="操作详情"
            >
            <div slot="footer" style="display:none"></div>
        </Modal>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { AxiosPromise, AxiosResponse } from "axios";
import { TableColumn } from "iview";
@Component
export default class logAudit extends Vue {
  private logForm: object = {
    searchContent: ""
  };
  private logModal: boolean = false;
  public keyDownEvent(): void {}
  public searchLog(): void {}
  public logDetail(): void {
    this.logModal = true;
  }
  public resetLogForm(): void {}
  private pageNumChange(num: number): void {}
  private pageSizeChange(num: number): void {}
  private logData: object[] = [];
  get logColumns(): Array<TableColumn> {
    return [
      {
        title: "模块名称",
        key: "jobId"
      },
      {
        title: "操作类型",
        key: "name",
        align: "center"
      },

      {
        title: "工号/学号",
        key: "mobile",
        align: "center"
      },
      {
        title: "操作者姓名",
        key: "DomainPermission",
        align: "center"
      },
      {
        title: "操作时间",
        key: "DomainPermission",
        align: "center"
      },
      {
        title: "操作结果",
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
}
</script>

<style lang="stylus" src="./index.styl" scoped>
</style>
