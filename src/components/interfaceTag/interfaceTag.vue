<template>
  <div class="interfaceTag">
    <div class="interface-box mb-5">
      <div class="title mb-10">接口分类名称1</div>
      <Row type="flex">
        <Tag color="default" class="mr-5 mb-10">default</Tag>
        <Tag color="default" class="mr-5 mb-10">default</Tag>
        <Tag color="default" class="mr-5 mb-10">default</Tag>
        <Tag color="default" class="mr-5 mb-10">default</Tag>
        <Tag color="default" class="mr-5 mb-10">default</Tag>
        <Tag color="default" class="mr-5 mb-10">default</Tag>
        <Tag color="default" class="mr-5 mb-10">default</Tag>
        <Tag color="default" class="mr-5 mb-10">default</Tag>
        <Tag color="default" class="mr-5 mb-10">default</Tag>
        <Tag color="default" class="mr-5 mb-10">default</Tag>
        <Tag color="default" class="mr-5 mb-10">default</Tag>
      </Row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class interfaceTag extends Vue {
  @Prop() private data!: object;
}
</script>

<style lang="stylus" scoped>
@import '~stylus/variable'

.interface-box
  .title
    font-size 12px
    color $text-color
</style>
