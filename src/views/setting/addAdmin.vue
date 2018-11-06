<template>
    <div>
       <Row class="title-top mb-15">
          新增管理员
      </Row>
        <div class="container">
          <Row class="mb-10">
            <title-bar title="选择用户和身份"></title-bar>  
          </Row>
        </div>
        <div class="fixButton">
          <Button size="large" type="primary" class="mr-20">确认</Button>
          <Button size="large">取消</Button>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { AxiosPromise, AxiosResponse } from "axios";
import titleBar from "@/components/titleBar/titleBar.vue";
@Component({
  components: {
    titleBar
  }
})
export default class addAdmin extends Vue {
  // data
  // computed
}
</script>

<style lang="stylus" src="./index.styl" scoped>
</style>
