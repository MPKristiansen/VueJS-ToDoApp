// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

import ToDoList from "./components/ToDoList";
import Home from "./components/Home";

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Home },
    { path: "/todos", component: ToDoList }
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <nav>
        <div class="nav-wrapper">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/todos">My To-Do list</router-link></li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    `
}).$mount("#app");
