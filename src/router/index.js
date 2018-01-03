import Vue from 'vue'
import Router from 'vue-router'
import NestedSetsPage from '@/components/NestedSetsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NestedSetsPage',
      component: NestedSetsPage
    }
  ]
})
