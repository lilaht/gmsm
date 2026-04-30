import { createRouter, createWebHistory } from 'vue-router';
import { Home, Password, Playlist } from '@/views';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/but-first',
      name: 'but first',
      component: Password
    },
    {
      path: '/i-hope-it-is-a-good-day-for-both-of-us',
      name: 'big day',
      component: Playlist
    }
  ],
})

export default router
