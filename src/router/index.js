import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import List from '@/components/List'
import Manager from '@/components/Manager'
import Add from '@/components/Add'
import Update from '@/components/Update'
import Delete from '@/components/Delete'
import Detail from '@/components/Detail'
import Cart from '@/components/Cart'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/manager',
      component: Manager,
      children: [
        {
          path: 'add',
          component: Add
        },
        {
          path: 'update',
          component: Update
        },
        {
          path: 'delete',
          component: Delete
        }
      ]
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/cart',
      component: Cart
    }
  ]
})
