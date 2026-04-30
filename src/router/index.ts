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
      path: '/password',
      name: 'but first',
      component: Password
    },
    {
      path: '/playlist',
      name: 'playlist',
      component: Playlist
    }
  ],
})

export default router
