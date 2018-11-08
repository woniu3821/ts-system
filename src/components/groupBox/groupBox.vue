<template>
  <Row class="group-box">
    <Col :md="16" :lg="modal?17:14">
    <div class="group-table">
      <p class="group-title mb-20">待选择</p>
      <Input class="mb-10" v-model="search" placeholder="用户组名称，1~20个汉字"></Input>
      <Table height="350" @on-selection-change="groupSelectChange" border :columns="groupColumns" :data="groupData"></Table>
      <Page class="mt-10" :total="100" show-sizer @on-change="pageNumChange" @on-page-size-change="pageSizeChange" show-total />
    </div>
    </Col>
    <Col :md="8" :lg="modal?7:5">
    <div class="groupPeoples ml-10">
      <p class="group-title mb-20">已选择0人</p>
      <people-tag></people-tag>
    </div>
    </Col>
  </Row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { TableColumn } from "iview";
import peopleTag from "@/components/peopleTag/peopleTag.vue";
@Component({
  components: {
    peopleTag
  }
})
export default class groupBox extends Vue {
  @Prop() private modal!: boolean;
  groupData: object[] = [];
  private search: string | number = "";
  private groupSelectChange(num: number): void {}
  private pageNumChange(num: number): void {}
  private pageSizeChange(num: number): void {}
  private tagClose(): void {}
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
}
</script>

<style lang="stylus" scoped>
@import '~stylus/variable'

.group-box
  display flex
  .group-table, .groupPeoples
    border 1px solid $border-base-color
    padding 15px 10px
    border-radius 4px
    box-sizing border-box
    // height 400px
    .group-title
      font-size 14px
      color $text-color
  .groupPeoples
    height 530px
    overflow-y auto
</style>
