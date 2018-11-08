<template>
<div class="card-containner">
    <Card :bordered="false" :padding="8" class="group-card-box">
      <div>
      <Icon type="md-add-circle" size="20" color="#4491F5" /><p>新增用户组</p>
      </div>
    </Card>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class cardAdd extends Vue {
  @Prop() private data!: object;
}
</script>

<style lang="stylus" scoped>
@import '~stylus/variable'
@import '~stylus/mixins'

.card-containner
  .group-card-box
    border 1px dashed #4491F5
    display flex
    align-items center
    justify-content center
    width 220px
    height 93px
    & div
      display flex
      font-size 12px
      color #4491F5
</style>
