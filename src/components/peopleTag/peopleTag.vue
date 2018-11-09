<template>
<div class="people-container">
  <div class="people">
      <Icon custom="iconfont icon-people" size="16" color="#5E6777" />
      <slot>12312321</slot>
      <Icon custom="iconfont icon-close" size="16" color="#CBCFD6" />
    </div>
</div>
  
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class peopleTag extends Vue {
  @Prop() private data!: object;
}
</script>

<style lang="stylus" scoped>
@import '~stylus/variable'

.people-container
  position relative
  .people
    display flex
    position absolute
    padding 4px
    border 1px solid $border-base-color
    cursor pointer
    align-items center
    justify-content space-between
    border-radius 4px
</style>
