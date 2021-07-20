import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import Idea from "../views/Idea.vue";
import IdeaEditer from '../views/IdeaEditer.vue';
import Myidea from "../views/MyIdea.vue";
import Ranking from "../views/Ranking.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/myidea",
    name: "myidea",
    component: Myidea
  },
  {
    path: "/ranking",
    name: "ranking",
    component: Ranking
  },
  {
    path: "/idea/:id",
    name: "idea",
    component: Idea,
    props: true
  },
  {
    path: "/editer",
    name: "editer",
    component: IdeaEditer,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;