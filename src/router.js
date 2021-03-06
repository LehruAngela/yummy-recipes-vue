import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/login',
    component: Login
  }, {
    path: '/register',
    component: Register
  }]
})

export default router;