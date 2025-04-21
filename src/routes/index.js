import { createRouter, createWebHasHistory } from 'vue-router'
import Home from './Home'
import About from './About'

export default createRouter({
  // Hash
  // https://google.com/#/search
  history: createWebHasHistory(),
  // pages
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
})