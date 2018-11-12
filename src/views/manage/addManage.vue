<template>
  <div>
    <Row class="title-top mb-15">
      新增用户组
    </Row>
    <div class="container pb-80">
      <Form :model="groupForm" :label-width="90">
        <Row>
          <title-bar title="基本信息"></title-bar>
          <FormItem label="用户组类型" prop="gender">
            <RadioGroup v-model="groupForm.type">
              <Radio :label="1">普通用户组</Radio>
              <Radio :label="2">动态用户组</Radio>
            </RadioGroup>
          </FormItem>
          <Row>
            <Col :md="16" :lg="14">
            <FormItem label="用户组名称" prop="name" :rules="{required: true, message:'业务域名称不能为空', trigger: 'blur'}">
              <Input v-model="groupForm.name" placeholder="用户组名称，1~20个汉字"></Input>
            </FormItem>
            <FormItem label="用户组描述" prop="desc">
              <Input v-model="groupForm.desc" type="textarea" :autosize="{minRows: 5,maxRows: 7}" placeholder="用户组描述"></Input>
            </FormItem>
            </Col>
            <Col :md="8" :lg="5">
            <div class="group-info ml-10">您创建的用户组可在所有业务域下使用，但只能由本业务域管理员更新维护</div>
            </Col>
          </Row>
          <Row>
            <title-bar class="mb-20" title="用户组成员"></title-bar>
            <template v-if="groupForm.type==1">
              <group-box></group-box>
            </template>
            <template v-else>
              <Row>
                <Col :md="16" :lg="14">
                <FormItem label="动态SQL" prop="desc">
                  <Input v-model="groupForm.desc" type="textarea" :autosize="{minRows: 7,maxRows: 20}" placeholder=""></Input>
                </FormItem>
                </Col>
                <Col :md="8" :lg="5">
                <div class="group-info ml-10">动态组成员的查询条件，仅支持符合标准SQL语法的SELECT操作。参考sql：SELECT user_wid FROM t_wec_user
                  WHERE school_id = '1018650047507463' AND user_id LIKE '%2017060%' AND is_deleted = '0''"</div>
                </Col>
              </Row>
              <Row>
                <Col :md="16" :lg="14">
                <FormItem label="判断SQL" prop="desc">
                  <Input v-model="groupForm.desc" type="textarea" :autosize="{minRows: 7,maxRows: 20}" placeholder=""></Input>
                </FormItem>
                </Col>
                <Col :md="8" :lg="5">
                <div class="group-info ml-10">用于判断给定的用户是否属于该动态组，仅支持符合标准SQL语法的SELECT
                  COUNT操作。当执行结果大于0时，认定用户属于该动态组。参考sql：SELECT COUNT(1) FROM t_wec_user WHERE school_id =
                  '1018650047507463'
                  AND user_id LIKE '%2017060%' AND is_deleted = '0' AND user_wid={USER@USERNAME}"</div>
                </Col>
              </Row>
              <FormItem label="定时更新">
                <i-switch v-model="groupForm.switch" />
              </FormItem>
              <FormItem label="开始时间">
                <DatePicker type="datelabel" placeholder="请选择开始时间" style="width: 350px"></DatePicker>
              </FormItem>
              <Row>
                <Col :md="16" :lg="14">
                <FormItem label="更新频率">
                  <Row class="group-time">
                    <div>
                      <Input style="width:80px" v-model.trim="groupForm.day" placeholder=""></Input><span>日</span>
                    </div>
                    <div>
                      <Input style="width:80px" v-model.trim="groupForm.hour" placeholder=""></Input><span>小时</span>
                    </div>
                    <div>
                      <Input style="width:80px" v-model.trim="groupForm.minute" placeholder=""></Input><span>分钟</span>
                    </div>
                  </Row>
                </FormItem>
                </Col>
              </Row>
            </template>
          </Row>
        </Row>
      </Form>
      <div class="fixButton">
        <Button size="large" type="primary" class="mr-20">保存</Button>
        <Button size="large" class="mr-20" @click="groupModal=true">预览成员</Button>
        <Button size="large">取消</Button>
      </div>
    </div>
    <Modal class="group-modal" v-model="groupModal" width="700" title="预览成员" @on-visible-change="groupModalChanges">
      <Table height="350" @on-selection-change="groupSelectChange" border :columns="groupColumns" :data="groupData"></Table>
        <Page class="mt-10"  size="small" :total="100" show-sizer @on-change="pageNumChange" @on-page-size-change="pageSizeChange" show-total />
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
export default class addManage extends Vue {
  @Action private MANAGER_QUERY!: () => AxiosPromise;
  @Watch("groupForm.type")
  private watchGroupType(now: number) {}
  groupModal: boolean = false;
  private groupForm: object = {
    type: 1,
    name: "",
    desc: "",
    switch: false
  };

  private groupModalChanges(value: boolean): void {}
  private groupData: object[] = [];
  private groupSelectChange(num: number): void {}
  private pageNumChange(num: number): void {}
  private pageSizeChange(num: number): void {}
  get groupColumns(): Array<TableColumn> {
    return [
      {
        type: "selection",
        width: 60,
        align: "center"
      },
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

  mounted() {
    // setInterval(() => {
    //   this.show = !this.show;
    // }, 1000);
  }
  created() {
    // console.log(3333);
  }
}
</script>

<style lang="stylus" src="./add.styl" scoped>
</style>
