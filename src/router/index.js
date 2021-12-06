import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Repos from '@/views/Repos.vue'
import WhoFllowMe from '@/views/WhoFllowMe.vue'
import IFllow from '@/views/IFllow.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/repos',
    name: 'Repos',
    component: Repos
  },
  {
    path: '/who-follow-me',
    name: 'WhoFllowMe',
    component: WhoFllowMe
  },
  {
    path: '/i-follow',
    name: 'IFllow',
    component: IFllow
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
