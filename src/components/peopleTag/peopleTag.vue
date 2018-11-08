<template>
  <div class="people">
     <Icon custom="iconfont icon-people" size="16" color="#5E6777" />
     <slot></slot>
    <Icon custom="iconfont icon-close" size="16" color="#CBCFD6" />
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

.people
  display flex
  padding 4px
  border 1px solid $border-base-color
  cursor pointer
  align-items center
  justify-content space-between
  width auto
  border-radius 4px
</style>
