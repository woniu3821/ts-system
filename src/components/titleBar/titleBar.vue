<template>
  <div class="nav-title-bar">
      <i></i><span>{{title}}</span>
      <slot name="extra"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class titleBar extends Vue {
  @Prop() private title!: string;
}
</script>

<style lang="stylus" scoped>
.nav-title-bar
  font-size 16px
  color $base-color
  display flex
  align-items center
  &>i
    display block
    width 5px
    height 15px
    background #488cf0
    margin-right 6px
</style>
