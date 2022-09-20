import { User } from 'lucide-vue-next'
import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router'
import useAuthentication from '../composables/useAuthentication'

const { user } = useAuthentication

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
        path: '/birds',
        component: () => import('../screens/birds/birds.vue'),
      },
      {
        path: '/observations',
        component: () => import('../screens/observations/observations.vue'),
        meta: {
          needsAuthentication: true,
        }
      },
      {
        path: '/logs',
        component: () => import('../screens/logs/logs.vue'),
        meta: {
          needsAuthentication: true,
        }
      },
      {
        path: '/account',
        component: () => import('../screens/Account.vue'),
        meta: {
          needsAuthentication: true,
        }
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
        path: '/auth/login',
        component: () => import('../components/auth/Login.vue'),
        meta: {
          cantAuthenication: true
        }
      },
      {
        path: '/auth/register',
        component: () => import('../components/auth/Register.vue'),
        meta: {
          cantAuthenication: true
        }
      },
      {
        path: '/auth/forgotpassword',
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

router.beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
  if (to.meta.needsAuthentication) {
    return '/auth/login'
  }
  if (to.meta.cantAuthenication && user.value) {
    return '/'
  }
}

export default router
