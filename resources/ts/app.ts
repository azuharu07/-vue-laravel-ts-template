import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";
import HeaderComponent from "./components/HeaderComponent.vue";

window.Vue = require("vue");
Vue.use(VueRouter);
Vue.component("HeaderComponent", HeaderComponent);

const app = new Vue({
    el: "#app",
    router
});
