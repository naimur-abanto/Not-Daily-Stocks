import App from './App.vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import LandingPage from './components/LandingPageBody.vue'
import PrivacyDetails from './components/PrivacyDetails.vue'
import TermsDetails from './components/TermsDetails.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: LandingPage },
        { path: '/signup', component: SignUp },
        { path: '/login', component: LogIn },
        { path: '/privacy', component: PrivacyDetails },
        { path: '/terms', component: TermsDetails }
    ]
})

const app = createApp(App);

app.use(router);

app.mount('#app');

