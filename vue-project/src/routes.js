import VueRouter from 'vue-router'
import Cars from './pages/Cars'
import Home from './pages/Home'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/cars',
            component: Cars
        }
    ],
    mode: 'history'
})