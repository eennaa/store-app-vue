import Vue from 'vue'
import VueRouter from 'vue-router'

import AppCustomers from './components/AppCustomers.vue'
import AppProducts from './components/AppProducts.vue'


Vue.use(VueRouter)

export default new VueRouter({ 
  mode: 'history',
  routes: [
    {path:'/'  , redirect: '/customers' },
    {path:'/customers'  , component: AppCustomers, props:true },
    {path:'/products'  , component: AppProducts, props:true}
  ]
  })

