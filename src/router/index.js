import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta: {
        title: "HomePage",
      },
    },
    {
      path: "/show_todo",
      name: "ShowTodo",
      component: () => import("../views/ShowTodos.vue"),
      meta: {
        title: "ShowTodo",
      },
    },
  ],
});

export default router;
