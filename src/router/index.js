import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Rendezvous from '@/views/Rendezvous.vue'
import NewHome from '@/views/NewHome.vue'
import Covid19 from '@/views/Covid19.vue'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/rendezvous',
    name: 'Rendezvous',
    component: Rendezvous
  },
  {
    path: '/',
    name: 'Home',
    component: NewHome
  },
  {
    path: '/covid19',
    name: 'Covid19',
    component: Covid19
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
