import { createRouter, createWebHistory } from "vue-router";
import route  from '@/router/routes.js'
import Profile from "../views/profile/Profile.vue";


const routes = [
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
].concat(route);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authenticated = localStorage.getItem('token')
  const onlyLoggedOut = to.matched.some(record => record.meta.onlyLoggedOut)
  const isPublic = to.matched.some(record => record.meta.public)
  
  if (!isPublic && !authenticated) {
    return next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
  if (authenticated && onlyLoggedOut) {
    return next('/')
  }
  next()
})

export default router;
