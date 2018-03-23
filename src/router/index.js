import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import layout from '@/components/layout'
import sec from '@/components/sec'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: layout
    },
    {
      path: '/sec',
      name: 'sec',
      component:sec
    }
  ]
})
