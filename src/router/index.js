import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import AdminLayout from '../layouts/AdminLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import Login from '../views/auth/Login.vue'
import Home from '../views/admin/home/Index.vue'
import User from '../views/admin/user/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta:{needLogin:true},
    redirect:'/home',
    component: AdminLayout,
    children:[{
      path:'home',
      name:'Home',
      meta:{roles:['Admin','Marketing','CustomerService']},
      component:Home
    },{
      path:'user',
      name:'User',
      meta:{roles:['Admin','Marketing','CustomerService']},
      component:User
    },{
      path:'product',
      name:'Product',
      meta:{roles:['Admin']},
      component:()=>import(/* webpackChunkName: "product" */ '../views/admin/product/Index.vue')
    }]
  },
  {
    path: '/auth',
    name: 'Auth',
    component: AuthLayout,
    redirect:'/auth/login',
    children:[
      {
        path:'login',
        name:'Login',
        component:Login
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
