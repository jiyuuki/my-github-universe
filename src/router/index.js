import { createRouter, createWebHistory } from 'vue-router'
// import { useStore } from 'vuex'

import SearchLayout from '@/layouts/Search.vue'
import UniverseLayout from '@/layouts/Universe.vue'

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
        name: 'Search',
        props: true,
        component: Search
      }
    ]
  },
  {
    path: '/universe/:username',
    name: 'UniverseLayout',
    component: UniverseLayout,
    params: ['username'],
    props: true,
    children: [
      {
        path: '',
        name: 'Universe',
        component: Universe,
      },
      {
        path: 'repositories',
        name: 'Repositories',
        component: Repositories,
      },
      {
        path: 'followers',
        name: 'Followers',
        component: Followers,
      },
      {
        path: 'following',
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

router.beforeEach(async(to, from, next) => {
  if (to.name !== 'Search' && to.name !== 'Universe') next({ name: 'Search' })
  else next()
})

export default router
