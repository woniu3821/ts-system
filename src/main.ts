import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import "iview/dist/styles/iview.css";
import "stylus/global.styl";
import iview from "iview";
// import $ from "jquery";
Vue.use(iview);

Vue.config.productionTip = false;
import Component from "vue-class-component";
Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate"
]);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
