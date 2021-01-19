import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Skills from "../views/Skills.vue";
import Info from "../views/Info.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ '../views/About.vue'),
    component: Home
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills
  },
  {
    path: "/info",
    name: "Info",
    component: Info
  }
];

const router = new VueRouter({
  routes
});

export default router;
