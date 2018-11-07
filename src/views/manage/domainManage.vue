<template>
  <div>
    <Row class="title-top mb-15">
      域管理
    </Row>
    <Row class="section-box">
      <Row class="section-l mr-20">
        <div class="top mt-15 ml-10">
          <span>域列表</span>
          <span class="ml-10">+新增域</span>
        </div>
        <ul class="domian-list">
          <li @click="selectDomian(item.value)" :class="{active:isSelect===item.value}" v-for="item in domianList" :key="item.value">{{item.label}}</li>
        </ul>
      </Row>
      <Row class="section-r">
        <div class="top">
          域相关设置
        </div>
        <title-bar class="mt-20" title="基本信息">
          <div slot="extra" class="extra-btn" @click="basicShow">编辑</div>
        </title-bar>
        <Row class="basic-info">
          <dl class="mt-20">
            <dt class="mr-15">域名称</dt>
            <dd>测试域</dd>
          </dl>
          <dl class="mt-20">
            <dt class="mr-15">域描述</dt>
            <dd>测试域</dd>
          </dl>
          <dl class="mt-20">
            <dt class="mr-15">包含应用</dt>
            <dd>测试域测试域测试域测试域测试域测</dd>
          </dl>
        </Row>
        <Row class="table-content mt-20">
          <Tabs value="name1">
            <TabPane label="权限设置" name="name1">
              <div class="container">
                <dot-bar class="mb-10" title="数据字典">
                  <div slot="extra" class="extra-btn">点此编辑</div>
                </dot-bar>
                <Row>
                  <Table border :columns="dictColumns" :data="dictData"></Table>
                </Row>
                <dot-bar class="mt-15 mb-10" title="数据表">
                  <div slot="extra" class="extra-btn">点此编辑</div>
                </dot-bar>
                <Row class="dataTable">
                  <Row class="left">
                    <Menu theme="light" width="70px" active-name="1">
                      <MenuItem name="1">
                      文章
                      </MenuItem>
                      <MenuItem name="2">
                      评论管理
                      </MenuItem>
                    </Menu>
                  </Row>
                  <Row class="right">
                    <div class="title">表格权限：推送、读取、新增、修改、删除</div>
                    <Table border :columns="tableColumns" :data="tableData"></Table>
                  </Row>
                </Row>
                <dot-bar class="mt-15 mb-10" title="接口">
                </dot-bar>
                <div class="interface">
                  <p @click="interfaceShow">+添加接口</p>
                  <p>定义域所包含的应用可以使用的接口</p>
                </div>
              </div>

            </TabPane>
            <TabPane label="用户组设置" name="name2">
              <div class="interface" >
                <p @click="addUserGroup">+新增用户组</p>
                <p>您创建的用户组可在所有业务域下使用，但只能由本业务域管理员更新维护</p>
              </div>
            </TabPane>
          </Tabs>
          <Row class="delete-box mt-20">
            <Button type="error" ghost>删除业务域</Button>
          </Row>
        </Row>
      </Row>
    </Row>
    <modal-box :show.sync="interfaceModalShow" title="所需接口">
      <Form label-position="top">
        <CheckboxGroup v-model="interfaceSelect">
          <FormItem v-for="item in interfaceList" :key="item.categoryId" :label="item.categoryName">
            <Checkbox v-for="child in item.apiRoles" :label="child.wid" :key="child.wid">{{child.name}}</Checkbox>
          </FormItem>
        </CheckboxGroup>
      </Form>
    </modal-box>
    <modal-box :show.sync="basicModalShow" title="编辑基本信息" :ok="{text:'添加'}">
      <Form :model="basicForm" :label-width="90">
        <FormItem label="业务域名称" prop="name" :rules="{required: true, message:'业务域名称不能为空', trigger: 'blur'}">
            <Input v-model="basicForm.name" placeholder=""></Input>
        </FormItem>
        <FormItem label="业务域描述" prop="desc">
            <Input v-model="basicForm.desc" type="textarea" :autosize="{minRows: 5,maxRows: 7}" placeholder=""></Input>
        </FormItem>
      </Form>
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
  private isSelect: number = 1;
  private domianList: object[] = [
    {
      label: "域列表",
      value: 1
    },
    {
      label: "域列表1",
      value: 2
    },
    {
      label: "域列表2",
      value: 3
    },
    {
      label: "域列表3",
      value: 4
    }
  ];
  private basicForm: object = {
    name: "",
    desc: ""
  };
  private basicModalShow: boolean = false;
  private formInterface: object = {};
  private selectDomian(value: number): void {
    this.isSelect = value;
  }
  //  接口列表
  interfaceList: Array<InterfaceList> = [
    {
      categoryId: "41432143",
      categoryName: "分类1",
      apiRoles: [
        {
          wid: "1",
          name: "测试",
          selected: false
        },
        {
          wid: "2",
          name: "测试2",
          selected: false
        }
      ]
    }
  ];
  interfaceSelect: Array<number> = [];
  dictData: object[] = [];
  tableData: object[] = [];
  interfaceModalShow: boolean = false;
  private interfaceShow(): void {
    this.interfaceModalShow = true;
  }
  private basicShow(): void {
    this.basicModalShow = true;
  }
  addUserGroup(): void {
    this.$router.push("addManage");
  }
  get dictColumns(): Array<TableColumn> {
    return [
      {
        title: "数据字典名称",
        key: "jobId"
      },
      {
        title: "读取",
        key: "name",
        align: "center"
      },
      {
        title: "新增",
        key: "major",
        align: "center"
      },
      {
        title: "修改",
        key: "mobile",
        align: "center"
      },
      {
        title: "删除",
        key: "MenuPermission",
        align: "center"
      },
      {
        title: "推送",
        key: "DomainPermission",
        align: "center"
      }
    ];
  }
  get tableColumns(): Array<TableColumn> {
    return [
      {
        title: "字段",
        key: "jobId"
      },
      {
        title: "读取",
        key: "name",
        align: "center"
      },

      {
        title: "修改",
        key: "mobile",
        align: "center"
      },
      {
        title: "推送",
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
}
</script>

<style lang="stylus" src="./index.styl" scoped>
</style>
