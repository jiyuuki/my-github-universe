import { createRouter, createWebHistory } from 'vue-router'
import SearchLayout from '@/layouts/search.vue'
import UniverseLayout from '@/layouts/universe.vue'

import Search from '@/views/search/Search.vue'
import Universe from '@/views/universe/Universe.vue'
import Repositories from '@/views/universe/Repositories.vue'
import Followers from '@/views/universe/Followers.vue'
import Following from '@/views/universe/Following.vue'

const routes = [
  {
    path: '/',
    name: 'SearchLayout',
    component: SearchLayout,
    children: [
      {
        path: '',
        component: Search
      }
    ]
  },
  {
    path: '/universe/:username',
    name: 'UniverseLayout',
    component: UniverseLayout,
    children: [
      {
        path: '',
        name: 'Universe',
        component: Universe,
      },
      {
        path: '/repositories',
        name: 'Repositories',
        component: Repositories,
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
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
