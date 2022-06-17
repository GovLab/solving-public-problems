import { createRouter, createWebHistory } from "vue-router";
import routes from '~pages';


const router = createRouter({
  history: createWebHistory(),
  base: './',
  routes
})

export default router