import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import Login from '../../src/components/Login.vue'
import Home from '../../src/components/Home.vue'
import Welcome from '../../src/components/Welcome.vue'
import Register from '../../src/components/Register.vue'

const routes = [
  {
    path: '/',
    component: Welcome
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
