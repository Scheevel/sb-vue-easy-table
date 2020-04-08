import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

Vue.component(App.name,App)

function returnDV() {
  return "deepvaluereturn"
}

new Vue({
  el: '#app',
  store,
  /*data: ()=> {return{deep:"testvalue"}},*/
  /*components: {App},*/
  template:'<App/>',
  render: h => h(App, {props: { deep:returnDV()}})
})//.$mount("#app");