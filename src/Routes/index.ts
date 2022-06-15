import { createRouter, createWebHistory} from 'vue-router'
// import LogIn from '@/components/LogIn.vue'
// import SignUp from '@/components/SignUp.vue'
import PrivacyDetails from '@/components/PrivacyDetails.vue'
import TermsDetails from '@/components/TermsDetails.vue'


const routes = [
    { 
        path: '/',
        name: 'LandingPage',  
        component: () => import('@/views/LandingPage.vue')
    },
    // { path: '/signup', component: SignUp },
    // { path: '/login', component: LogIn },
    { path: '/privacy', component: PrivacyDetails },
    { path: '/terms', component: TermsDetails },
  
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "auth" */ '@/views/Auth/AuthView.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Auth/LogIn.vue'),
      },
      {
        path: 'signup',
        name: 'SignUp',
        component: () => import(/* webpackChunkName: "signup" */ '../views/Auth/SignUp.vue'),
      },
    ]
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
