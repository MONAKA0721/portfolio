import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import page2 from '@/components/page2'
import about from '@/components/about'
import works from '@/components/works'
import languages from '@/components/languages'
import skills from '@/components/skills'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: top
    },
    {
      path: '/page2',
      component: page2
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/works',
      component: works
    },
    {
      path: '/languages',
      component: languages
    },
    {
      path: '/skills',
      component: skills
    }
  ]
})
