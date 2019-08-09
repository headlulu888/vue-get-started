import VueRouter from 'vue-router'
import Cars from './pages/Cars'
import Home from './pages/Home'
import Car from './pages/Car'
import Errors from './pages/Error'
import CarFull from './pages/CarFull'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/cars',
            component: Cars,
            name: 'cars'
        },
        {
            path: '/car/:id',
            component: Car,
            children: [
                {
                    path: 'full',
                    component: CarFull,
                    name: 'carFull'
                }
            ]
        },
        {
            path: '/none',
            redirect: {
                name: 'cars'
            }
        },
        {
            path: '*',
            component: Errors
        },
    ],
    mode: 'history',
    scrollBehavior(to, from, savePosition) {
        if (savePosition) {
            return savePosition
        }

        if (to.hash) {
            return { selector: to.hash }
        }

        return {
            x: 0,
            y: 200
        }
    }
})