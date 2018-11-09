<template>
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
        <div class="title">
          <label>
            表格权限:
          </label>
          <p v-if="!edit">推送、读取、新增、修改、删除</p>
          <div v-else>
            <CheckboxGroup   v-model="social">
              <Checkbox label="twitter">
              读取
              </Checkbox>
              <Checkbox label="facebook">
              新增
              </Checkbox>
              <Checkbox label="github">
              删除
              </Checkbox>
              <Checkbox label="snapchat">
                修改
              </Checkbox>
              <Checkbox label="snapchat">
                推送
              </Checkbox>
          </CheckboxGroup>
          </div>
          

        </div>
        <Table border :columns="tableColumns" :data="tableData"></Table>
      </Row>
    </Row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { TableColumn } from "iview";
@Component
export default class dictTable extends Vue {
  @Prop() private data!: object;
  private edit: boolean = false;
  private social: Array<number> = [];
  tableData: object[] = [];
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
}
</script>

<style lang="stylus" scoped>
@import '~stylus/variable'

.dataTable
  display flex
  .left
    width 70px
    flex-shrink 0
    margin-right 20px
  .right
    flex-grow 1
    overflow hidden
    .title
      font-size 12px
      height 28px
      line-height 28px
      background rgba(248, 248, 249, 1)
      margin-bottom 10px
      display flex
      align-items center
      &>label
        text-indent 1em
        margin-right 10px
  >>>.ivu-menu-item
    padding 10px
    padding-left 0
    font-size 12px
    text-align right
  >>>.ivu-menu-item-active:not(.ivu-menu-submenu)
    background #fff
</style>
