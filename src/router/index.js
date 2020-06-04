import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/login'
  }
]

const router = new VueRouter({
  routes
})

export default router
