import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import component from "form-widget-library";
import bootstrapvue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import componentplugin from "./plugins/component.plugin"; 

Vue.use(componentplugin);
Vue.use(component);
Vue.use(bootstrapvue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
