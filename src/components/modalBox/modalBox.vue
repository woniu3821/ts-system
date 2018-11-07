<template>
    <Modal @on-visible-change="change" :value="show" :title="title">
        <slot></slot>
        <div slot="footer">
            <ButtonGroup>
                <Button :icon="ok.icon?'ok.icon':''" :type="ok.type?ok.type:'primary'" @click="isok" >{{ok.text}}</Button>
                <Button :icon="del.icon?del.icon:''" :type="del.type?del.type:null" @click="cancel">{{del.text}}</Button>
            </ButtonGroup>
        </div>
    </Modal>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
@Component
export default class modalBox extends Vue {
  @Prop({ default: false })
  value!: boolean;
  @Prop({ default: false })
  private show!: boolean;
  @Prop() private title!: string;
  @Prop({ default: 400 })
  private width!: number;
  @Prop({
    default: function() {
      return { text: "确认", type: "primary", icon: "" };
    }
  })
  private ok!: object;
  @Prop({
    default: function() {
      return { text: "取消", type: null, icon: "" };
    }
  })
  private del!: object;
  private cancel(): void {
    this.$emit("update:show", false);
    this.$emit("on-cancel");
  }
  private isok(): void {
    this.$emit("on-ok");
  }
  private change(value: boolean): void {
    this.$emit("update:show", value);
    this.$emit("on-change", value);
  }
}
</script>

<style lang="stylus" scoped>
@import '~stylus/variable'
</style>
