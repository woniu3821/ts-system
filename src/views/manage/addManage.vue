<template>
  <div>
    <Row class="title-top mb-15">
      新增用户组
    </Row>
    <div class="container">
      <title-bar title="基本信息"></title-bar>

      <Row>
        <Col span="24">
        <Row>
          <Col span="12">
            <Form :model="groupForm" :label-width="90">
              <FormItem label="用户组类型" prop="gender">
                <RadioGroup v-model="groupForm.type">
                  <Radio label="male">Male</Radio>
                  <Radio label="female">Female</Radio>
                </RadioGroup>
              </FormItem>
              <FormItem label="用户组名称" prop="name" :rules="{required: true, message:'业务域名称不能为空', trigger: 'blur'}">
                <Input v-model="groupForm.name" placeholder="用户组名称，1~20个汉字"></Input>
              </FormItem>
              <FormItem label="用户组描述" prop="desc">
                <Input v-model="groupForm.desc" type="textarea" :autosize="{minRows: 5,maxRows: 7}" placeholder="用户组描述"></Input>
              </FormItem>
            </Form>
          </Col>
        </Row>
        </Col>
        <Col span="24">
        <Row>
          <title-bar title="用户组成员"></title-bar>
          <Row>
            <Col span="12">

            </Col>
          </Row>
          <Row>
            <Col span="12">

            </Col>
          </Row>
        </Row>
        </Col>
      </Row>
    </div>

    <!-- <modal-box :show.sync="basicModalShow" title="编辑基本信息" :ok="{text:'添加'}">
      <Form :model="basicForm" :label-width="90">
        <FormItem label="业务域名称" prop="name" :rules="{required: true, message:'业务域名称不能为空', trigger: 'blur'}">
            <Input v-model="basicForm.name" placeholder=""></Input>
        </FormItem>
        <FormItem label="业务域描述" prop="desc">
            <Input v-model="basicForm.desc" type="textarea" :autosize="{minRows: 5,maxRows: 7}" placeholder=""></Input>
        </FormItem>
      </Form>
    </modal-box> -->
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { AxiosPromise, AxiosResponse } from "axios";
import { InterfaceList } from "@/store/interface";
import titleBar from "@/components/titleBar/titleBar.vue";
import modalBox from "@/components/modalBox/modalBox.vue";
import dotBar from "@/components/dotBar/dotBar.vue";
import { TableColumn } from "iview";
@Component({
  components: {
    titleBar,
    dotBar,
    modalBox
  }
})
export default class domainManage extends Vue {
  private groupForm: object = {
    type: 1,
    name: "",
    desc: ""
  };
  private basicModalShow: boolean = false;
  mounted() {
    // setInterval(() => {
    //   this.show = !this.show;
    // }, 1000);
  }
}
</script>

<style lang="stylus" src="./index.styl" scoped>
</style>
