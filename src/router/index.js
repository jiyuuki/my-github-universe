import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Repository from '@/views/Repository.vue'
import Followers from '@/views/Followers.vue'
import Following from '@/views/Following.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/repositories',
    name: 'Repositories',
    component: Repository,
  },
  {
    path: '/followers',
    name: 'Followers',
    component: Followers,
  },
  {
    path: '/following',
    name: 'Following',
    component: Following,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
