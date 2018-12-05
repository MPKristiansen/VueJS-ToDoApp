// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Home";
import ToDoList from "./components/ToDoList";

Vue.config.productionTip = false;

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
      <div class="navbar-fixed">
        <nav>
          <div class="nav-wrapper blue darken-2">
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/todos">My To-Do list</router-link></li>
            </ul>
          </div>
        </nav>
      </div>
        <router-view></router-view>
    </div>
    `
}).$mount("#app");
