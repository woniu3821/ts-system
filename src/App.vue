<template>
  <div id="app">
   <nav-wrapper default-path="/adminSetting" :menus="menus"></nav-wrapper>
   <Spin size="large" fix v-if="this.$store.state.loading"></Spin>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import Home from "@/components/layout/Home.vue";
import { MenuList } from "@/store/interface";
import navWrapper from "iview-comps/components/nav-wrapper/navWrapper.vue";
@Component({
  components: {
    navWrapper
  }
})
export default class App extends Vue {
  @State private menus!: MenuList;
}
</script>

<style lang="stylus" scoped>
#app
  .router-link-exact-active
    color #1873e0
  .app-content
    position relative
</style>
