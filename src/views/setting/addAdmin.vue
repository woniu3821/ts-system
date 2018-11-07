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
        <Col span="8" style="padding-right:10px">
        <Form ref="selectForm" :model="selectForm" :rules="selectFormValidate" :label-width="80">
          <FormItem :props="selectForm.selectValue" required label="选择用户">
            <Select v-model="selectValue" filterable remote :remote-method="remoteSelect" :loading="remoteLoading"
              placeholder="请输入工号、姓名以搜索">
              <Option v-for="(option, index) in selectList" :value="option.value" :key="index">{{option.label}}</Option>
            </Select>
          </FormItem>
        </Form>
        </Col>
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
              <Checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll">全选</Checkbox>
            </div>
            <div class="check-content">
              <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                <Row>
                  <Col v-for="item in checkAllList" :key="item.value" span="8">
                  <Checkbox :label="item.value">{{item.label}}</Checkbox>
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
              <Checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll">全选</Checkbox>
            </div>
            <div class="check-content">
              <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                <Row>
                  <Col v-for="item in checkAllList" :key="item.value" span="8">
                  <Checkbox :label="item.value">{{item.label}}</Checkbox>
                  </Col>
                </Row>
              </CheckboxGroup>
            </div>
          </Row>
        </Card>

      </Row>
    </div>
    <div class="fixButton">
      <Button size="large" type="primary" class="mr-20">确认</Button>
      <Button size="large">取消</Button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { AxiosPromise, AxiosResponse } from "axios";
import { selectList } from "./interface";
import titleBar from "@/components/titleBar/titleBar.vue";
@Component({
  components: {
    titleBar
  }
})
export default class addAdmin extends Vue {
  // data
  private formValidate: object = {};

  private remoteLoading: boolean = false;
  private selectForm: object = {
    selectValue: ""
  };
  private selectValue: string = "";
  selectFormValidate: object = {};
  private selectList: Array<selectList> = [];

  private indeterminate: boolean = true;
  private checkAll: boolean = false;
  private checkAllList: Array<object> = [
    {
      label: "香蕉",
      value: 1
    },
    {
      label: "苹果",
      value: 2
    },
    {
      label: "西瓜",
      value: 3
    }
  ];
  private checkAllGroup: Array<number> = [1, 2, 3];

  // computed
  //methods
  private remoteSelect(value: string): void {}
  handleCheckAll(): void {
    if (this.indeterminate) {
      this.checkAll = false;
    } else {
      this.checkAll = !this.checkAll;
    }
    this.indeterminate = false;

    if (this.checkAll) {
      this.checkAllGroup = [1, 2, 3];
    } else {
      this.checkAllGroup = [];
    }
  }
  checkAllGroupChange(data: any[]): void {
    if (data.length === 3) {
      this.indeterminate = false;
      this.checkAll = true;
    } else if (data.length > 0) {
      this.indeterminate = true;
      this.checkAll = false;
    } else {
      this.indeterminate = false;
      this.checkAll = false;
    }
  }
}
</script>

<style lang="stylus" src="./index.styl" scoped>
</style>
