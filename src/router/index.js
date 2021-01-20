import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Rendezvous from '@/views/Rendezvous.vue'
import NewHome from '@/views/NewHome.vue'
import Covid19 from '@/views/Covid19.vue'
import Dayoff from '@/views/Dayoff.vue'
import Remote from '@/views/Remote.vue'
import Forms from '@/views/Forms.vue'

Vue.use(VueRouter)

const routes = [
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  {
    path: '/',
    name: 'Home',
    component: NewHome
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
    path: '/covid19',
    name: 'Covid19',
    component: Covid19
  },
  {
    path: '/day_off',
    name: 'Day_off',
    component: Dayoff
  },
  {
    path: '/remote',
    name: 'Remote',
    component: Remote
  },
  {
    path: '/forms',
    name: 'Forms',
    component: Forms
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
