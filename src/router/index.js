import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Demo from "../views/Demo.vue";
import Test from "../views/Test.vue";
import Computed from "../views/Computed.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/demo",
    name: "Demo",
    component: Demo
  },
  {
    path: "/test",
    name: "Test",
    component: Test
  },
  {
    path: "/computed",
    name: "Computed",
    component: Computed
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
 