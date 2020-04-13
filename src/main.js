import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import VueRouter from 'vue-router';
import { routes as routeList } from './routes';
/*import store from "./store";*/
import axios from "axios";
Vue.prototype.$lp = {};
Vue.prototype.$lp.$axios = axios;

//import api from "./api";
//Vue.prototype.$lp.$api = api;

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueRouter);
const vuetifyOpts = {};

const appRouter = new VueRouter({
  routes: routeList
});

//Vue.component(App.name,App)
/*
function returnDV() {
  return "deepvaluereturn"
}
*/
/*
function propObj() {
  return {deep: {
    default: returnDV(),
    type: String
  }
  }
}
*/

new Vue({
  el: '#app',
  vuetify: new Vuetify(vuetifyOpts),
  router: appRouter,
  /*store,*/
  /*mounted: ()=>{
    setTimeout(()=>{
      console.log('mounted');
    }, 2000)
  }*/
  /*data: ()=> {return{deep:"testvalue"}},*/
  /*components: {App},*/
  /*template:'<App/>',*/
  render: h => h(App, { 
    props: {
      /*
      deep: {
        type: String,
        default: returnDV(),
      }
      */
    }
  })
})//.$mount("#app");