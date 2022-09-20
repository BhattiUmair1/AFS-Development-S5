import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../components/holders/AppHolder.vue'),
    children: [
      {
        path: '/index',
        component: () => import('../screens/birds/index.vue'),
      },
      {
        path: '/locations',
        component: () => import('../screens/locations/locations.vue'),
      },
      {
        path: '/observations',
        component: () => import('../screens/observations/observations.vue'),
      },
      {
        path: '/logs',
        component: () => import('../screens/logs/logs.vue'),
      },
      {
        path: '/account',
        component: () => import('../screens/Account.vue'),
      }
    ],
  },
  {
    path: '/auth',
    name: 'ClientError',
    redirect: '/auth/login',
    component: () => import('../components/holders/AuthHolder.vue'),
    children: [
      {
        path: '/login',
        component: () => import('../components/auth/Login.vue'),
      },
      {
        path: '/register',
        component: () => import('../components/auth/Register.vue'),
      },
      {
        path: '/forgotpassword',
        component: () => import('../components/auth/ForgotPassword.vue'),
      },
    ],
  },
]

//auth => redirect to login
//auth/login
//auth/register
//auth/forgot-password
//auth/auth/forgot-password

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
