import About from '@/Views/About.vue';
import Employers from '@/Views/Employers.vue';
import Home from '@/Views/Home.vue';
import News from '@/Views/News.vue';
import Services from '@/Views/Services.vue';
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      // name: 'About',
      component: About
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path:'/employers',
      name:'Employers',
      component: Employers
    },
    {
      path:'/apply/:position?',
      name:'Apply',
      component: () => import('@/Views/Apply.vue')
    },
    {
      path:'/requestService/:service?',
      name:'Request',
      component: () => import('@/Views/Request.vue')
    },
    {
      path: '/news/:id',
      name: 'news',
      component: News,
      props: true
    },


  ],
  async scrollBehavior(to, from, savedPosition) {
    const delay = (t: number) => new Promise((r) => setTimeout(r, t))

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100
      }
    };
    if (savedPosition) {
      return savedPosition;
    } else {
      await delay(0)
      return { top: 0, behavior: 'smooth' };

    }
  }
})

export default router
