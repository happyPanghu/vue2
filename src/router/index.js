import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import top from '@/components/common/top'
import left from '@/components/common/left'
import right from '@/components/common/right'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
      	default: top,
      	left: left,
      	right: right
      }
    }
  ]
})
