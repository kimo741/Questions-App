import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Main from "../views/MainQuestions.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeView,
    name: "Home",
  },
  {
    path: "/question/:id",
    component: Main,
    name: "question",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
