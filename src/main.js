import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  data: ()=> {return{deep:"testvalue"}},
  components: {App},
  template:'<App/>'
});

  /*
  render: h => h(App)
})//.$mount("#app");
*/