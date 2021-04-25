import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/HomePage.vue'
import Teams from '@/views/home/Teams.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Teams',
        component: Teams
      },
      {
        path: '/:teamName',
        name: 'Players',
        component: () =>
          import(/* webpackChunkName: "players" */ '@/views/home/Players.vue')
      },
      {
        path: '/:teamName/:playerName',
        name: 'Posts',
        component: () =>
          import(/* webpackChunkName: "posts" */ '@/views/home/Posts.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
