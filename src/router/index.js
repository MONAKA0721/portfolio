import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import about from '@/components/about'
import works from '@/components/works'
import experiences from '@/components/experiences'
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
      path: '/about',
      component: about
    },
    {
      path: '/works',
      component: works
    },
    {
      path: '/experiences',
      component: experiences
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
