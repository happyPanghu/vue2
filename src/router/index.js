import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import layout from '@/components/layout'
import sec from '@/components/sec'
import thi from '@/components/thi'
import forth from '@/components/forth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        {
          path: 'sec',
          component: sec
        },
        {
          path: 'thi',
          name: 'thi',
          component:thi
        },
        {
          path: 'forth',
          name: 'forth',
          component:forth
        }
      ]
    },
     {
       path: '*',
       component: HelloWorld
     }
  ]
})
