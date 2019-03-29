import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'
import ParamTest from '@/components/ParamTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: '/Page1',
          name: '/Page1',
          component: Page1
        },
        {
          path: '/Page2',
          name: '/Page2',
          component: Page2
        },
        {
          path: '/Page3',
          name: '/Page3',
          component: Page3 
        }
      ]
    },
    {
      path: '/ParamTest',
      name: '/ParamTest',
      component: ParamTest
    }
  ]
})
