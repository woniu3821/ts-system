<template>
  <div>
    <Row class="title-top mb-15">
      新增管理员
    </Row>
    <div class="container">
      <Row class="mb-10">
        <title-bar title="选择用户和身份"></title-bar>
      </Row>
      <Row>
        <Form ref="manageAddFormRef" :model="manageAddForm" :rules="selectFormValidate" :label-width="80">
          <FormItem prop="userId" required label="选择用户" :rules="{required: true, message: '请搜索选择用户', trigger: 'change'}">
            <Select style="width:360px" v-model="manageAddForm.userId" filterable remote :remote-method="remoteSelect" :loading="remoteLoading"
              placeholder="请输入工号、姓名以搜索">
              <Option v-for="option in   selectList" :value="option.userId" :key="option.userId">{{option.userId}}（{{option.userName}}）</Option>
            </Select>
          </FormItem>
        </Form>
      </Row>
      <Row class="mb-10">
        <title-bar title="设置权限"></title-bar>
      </Row>
      <Row class="permissions">
        <Card class="permissions-box">
          <p class="title" slot="title">
            <Icon size="16" color="#fff" type="md-build"></Icon>
            <label>菜单权限</label>
          </p>
          <Row class="permissions-content">
            <div class="select-all">
              <Checkbox :indeterminate="baseSpace.indeterminate" :value="baseSpace.checkAll" @click.prevent.native="baseSpace.handleCheckAll">全选</Checkbox>
            </div>
            <div class="check-content">
              <CheckboxGroup v-model="baseSpace.checkAllGroup" @on-change="baseCheckAllGroupChange">
                <Row>
                  <Col v-for="item in baseSpace.checkAllList" :key="item.appId" span="8">
                  <Checkbox :label="item.appId">{{item.appName}}</Checkbox>
                  </Col>
                </Row>
              </CheckboxGroup>
            </div>
          </Row>
        </Card>
        <Card class="permissions-box  ml-20">
          <p class="title" slot="title">
            <Icon size="16" color="#fff" type="md-build"></Icon>
            <label>域权限</label>
            <span>在菜单权限中勾选“应用中心”时，才可设置</span>
          </p>
          <Row class="permissions-content">
            <div class="select-all">
              <Checkbox :indeterminate="domainSpace.indeterminate" :value="domainSpace.checkAll" @click.prevent.native="domainSpace.handleCheckAll">全选</Checkbox>
            </div>
            <div class="check-content">
              <CheckboxGroup v-model="domainSpace.checkAllGroup" @on-change="domainCheckAllGroupChange">
                <Row>
                 <Col span="8"  v-for="item in domainSpace.checkAllList" :key="item.domainId" >
                    <Checkbox :label="item.domainId">
                    {{item.domainName}}</Checkbox>
                 </Col>
                </Row>
              </CheckboxGroup>
            </div>
          </Row>
        </Card>

      </Row>
    </div>
    <div class="fixButton">
      <Button size="large" type="primary" @click="addManage" class="mr-20">确认</Button>
      <Button size="large" @click="cancel">取消</Button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { Setting } from "@/model/base";
import { AxiosPromise, AxiosResponse } from "axios";
import { selectList } from "./interface";
import { adminQueryInfo, listData, manageAdd } from "@/store/interface";
import titleBar from "@/components/titleBar/titleBar.vue";
import Manage from "@/views/setting/adminSetting.vue";
import { Form } from "iview";
@Component({
  components: {
    titleBar
  }
})
export default class addAdmin extends Setting {
  // data
  @Action
  private MANAGER_USER_QUERY!: (queryInfo: adminQueryInfo) => Promise<listData>;
  @Action private MANAGER_ADD!: (addInfo: manageAdd) => Promise<any>;
  public $refs!: {
    manageAddFormRef: Form;
  };
  private domaList: object[] = [];
  private adminQueryInfo: adminQueryInfo = {
    keyword: "",
    purpose: "1",
    pageSize: 10,
    pageNumber: 1
  };
  private manageAddForm: manageAdd = {
    userId: "",
    selectedAppIds: [],
    selectedDomainIds: []
  };
  private timer: any = null;
  private formValidate: object = {};

  private remoteLoading: boolean = false;

  private selectValue: string = "";
  selectFormValidate: object = {};
  private selectList: Array<selectList> = [];
  private domainCheckAllGroupChange(value: Array<string>) {
    this.domainSpace.checkAllGroupChange(value);
  }
  private baseCheckAllGroupChange(value: Array<string>) {
    this.baseSpace.checkAllGroupChange(value);
  }
  private getUserList() {
    this.remoteLoading = true;
    this.MANAGER_USER_QUERY(this.adminQueryInfo)
      .then(res => {
        this.remoteLoading = false;
        this.selectList = res.rows;
      })
      .catch(err => {
        let msg = err || "查询用户列表失败！";
        this.error(msg);
      });
  }
  private addManage(): void {
    this.$refs.manageAddFormRef.validate(valid => {
      if (valid) {
        this.manageAddForm.selectedAppIds = this.baseSpace.checkAllGroup;
        this.manageAddForm.selectedDomainIds = this.domainSpace.checkAllGroup;
        this.MANAGER_ADD(this.manageAddForm)
          .then(res => {
            this.success("新增管理员成功！");
          })
          .catch(err => {
            let msg = err || "新增管理员失败！";
            this.error(msg);
          });
      }
    });
  }
  // computed
  //methods
  private remoteSelect(value: string): void {
    this.adminQueryInfo.keyword = value;
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.getUserList();
    }, 50);
  }

  private cancel(): void {
    this.$router.push("adminSetting");
  }

  beforeDetory() {
    clearTimeout(this.timer);
  }
}
</script>

<style lang="stylus" src="./index.styl" scoped>
</style>
