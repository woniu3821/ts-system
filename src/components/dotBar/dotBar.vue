<template>
  <div class="dot-bar">
     <span>{{title}}</span>
      <slot name="extra"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class dotBar extends Vue {
  @Prop() private title!: string;
}
</script>

<style lang="stylus" scoped>
@import '~stylus/variable'

.dot-bar
  font-size 14px
  color $base-color
  display flex
  align-items center
  height 30px
  line-height 30px
.dot-bar:before
  content ''
  display block
  width 8px
  height 8px
  border-radius 50%
  background $primary-color
  margin-right 5px
</style>
