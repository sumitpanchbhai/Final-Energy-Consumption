import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Home_1 from './components/pages/compo1.vue'
import post_1 from './components/pages/compo2.vue'
import creat_post from './components/pages/compo3.vue'
import 'bootstrap/dist/css/bootstrap.css'

const routes = [{
        path: '/',
        component: Home_1
    },
    {
        path: '/post_1',
        component: post_1
    },
    {
        path: '/creat_post',
        component: creat_post
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});


const app = createApp(App);
app.use(router);
app.mount('#app');