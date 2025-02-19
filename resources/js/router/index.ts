import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [


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
