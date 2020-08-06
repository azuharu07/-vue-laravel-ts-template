import Vue from "vue"
import VueRouter from "vue-router"
import router from "./router"
import App from "./App.vue"

window.Vue = require('vue');
Vue.use(VueRouter);router

const app = new Vue({
    el: "#app",
    render: h => h(App),
    router
});
