<template>
    <Card :padding="8" class="group-card">
      <div class="title">
        <div class="title-left">
            <Icon custom="iconfont icon-renyuanzu-shi" size="30" color="#979EAD" />
        </div>
        <div class="title-right">
          <h1>老师组</h1>
          <p class="desc">
            用户组描述用户组描述用户描述用户描述用户
          </p>
          <div class="card-bottom mt-5">
            <p>共<label>33</label>人</p>
             <Tag class="ml-5" color="blue">动</Tag>
          </div>
        </div>
       
      </div>
    </Card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class groupCard extends Vue {
  @Prop() private data!: object;
}
</script>

<style lang="stylus" scoped>
@import '~stylus/variable'
@import '~stylus/mixins'

.group-card
  width 220px
  min-height 93px
  .title-left
    float left
  .title-right
    margin-left 33px
    h1
      font-size 12px
      color #464C5B
      font-weight 600
      padding 5px 0
      ellipsis()
    .desc
      width 100%
      font-size 12px
      color $text-color
      ellipsis()
    .card-bottom
      display flex
      align-items center
      font-size 12px
      color $text-color
      label
        color #2D8CF0
        font-weight 600
        font-size 16px
        padding 0 3px
</style>
