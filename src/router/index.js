import { createRouter, createWebHistory } from "vue-router";


import Home from '../pages/index.vue';
import Blog from '../pages/blog.vue';
import Courses from '../pages/courses.vue';
import Research from '../pages/research.vue';
import Resources from '../pages/resources.vue';
import Team from '../pages/team.vue';


const routes = [
  { path:"/", component: Home },
  { path:"/blog", component: Blog },
  { path:"/courses", component: Courses },
  { path:"/research", component: Research },
  { path:"/resources", component: Resources },
  { path:"/team", component: Team },
]

const router = createRouter({
  history: createWebHistory(),
  base: './',
  routes
})

export default router