import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/HomePage.vue'
import Teams from '../views/home/Teams.vue'

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
        // children: [
        //   {
        //     path: '/players',
        //     name: 'Players',
        //     component: () =>
        //       import(
        //         /* webpackChunkName: "players" */ '../views/home/players.vue'
        //       ),
        //     children: [
        //       {
        //         path: '/players/posts',
        //         name: 'Posts',
        //         component: () =>
        //           import(
        //             /* webpackChunkName: "players" */ '../views/home/posts.vue'
        //           )
        //       }
        //     ]
        //   }
        // ]
      },
      {
        path: '/players',
        name: 'Players',
        component: () =>
          import(/* webpackChunkName: "players" */ '../views/home/Players.vue')
      },
      {
        path: '/players/posts',
        name: 'Posts',
        component: () =>
          import(/* webpackChunkName: "players" */ '../views/home/Posts.vue')
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
